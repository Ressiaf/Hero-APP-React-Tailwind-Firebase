import React from 'react'
import {  Link } from "react-router-dom";
import { BsInstagram ,BsFacebook, BsGithub  } from "react-icons/bs"
const Footer = ( ) => {

return (    
    <>
        <div className="p-4 bg-black  dark:bg-gray-800 inset-x-0 bottom-0  ">
            <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 " />
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link to={"/"} className="text-sm text-gray-500 sm:text-center dark:text-gray-400">wikigeeks-  All Rights Reserved.</Link>
            </div>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <Link to={"/"}   className="text-gray-500 hover:text-gray-200/75 dark:hover:text-white" >
                    <BsInstagram />
                </Link>
                <Link to={"/"}   className="text-gray-500 hover:text-gray-200/75 dark:hover:text-white" >
                    <BsFacebook />
                </Link>
                <Link to={"/"}  className="text-gray-500 hover:text-gray-200/75 dark:hover:text-white" >
                    <BsGithub />
                </Link>
            </div>
        </div>
    </>
    
    )
}

export default Footer