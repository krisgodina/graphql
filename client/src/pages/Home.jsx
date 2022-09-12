import React from 'react'
import FriendForm from '../components/FriendForm'
import Friends from '../components/Friends'
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className='container-center' >

            <div className="flex flex-row flex-wrap">

                <div className="basis-full center mt-5">
                    <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-red-900 md:text-5xl lg:text-6xl dark:text-white">
                        Welcome to my GraphQL project
                    </h1>
                </div>

                <div className="basis-full center">
                    <p className="text-center mb-0 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Demonstrating CRUD functionality plus+
                    </p>
                </div>

                <div className="basis-full center">
                    <p className="flex text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        software testing using <Icon icon="logos:cypress" className="ml-3 text-2xl" />
                    </p>
                </div>


                <div className="basis-full center">
                    <a href="https://github.com/krisgodina/graphql" className="font-medium text-red-800 dark:text-blue-500 hover:underline flex mb-3"><Icon icon="akar-icons:github-fill" className='text-3xl mr-2' />View Github</a>
                </div>

            </div>

            <hr /><br />

            <div className="flex flex-row flex-wrap h-max w-full">

                <div className="basis-full center w-full">
                    <FriendForm />
                </div>

                <div className="basis-full center w-full ">
                    <Friends />
                </div>

            </div>
        </div>
    )
}

export default Home