const Friend = require('../models/Friend');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

//---------------------Types---------------------

// Friend Type
const FriendType = new GraphQLObjectType({
  name: 'Friend',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  })
});

//---------------------Queries---------------------

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    friends: {
      type: new GraphQLList(FriendType),
      resolve(parent, args){
        return Friend.find();
      },
    },
    friend: {
      type: FriendType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Friend.findById(args.id);
      },
    },
  },
});

//---------------------Mutations---------------------

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Create a friend
    createFriend: {
      type: FriendType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const friend = new Friend({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return friend.save();
      }
    },
    // Delete a friend
    deleteFriend: {
      type: FriendType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {

        return Friend.findByIdAndRemove(args.id);
      }
    },
    // Update a friend
    updateFriend: {
      type: FriendType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args){
        return Friend.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              phone: args.phone,
            },
          },
          { new: true }
        );
      },
    },
  },
});

//---------------------Exports---------------------

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
