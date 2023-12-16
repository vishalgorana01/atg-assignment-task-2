import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import defaultprofilephoto from '../assets/images/download 2.png'
import axios from 'axios'
import { MdOutlineClose } from "react-icons/md";

function UsersDetails() {
    const { data, userid, setuserid } = useContext(UserContext)

    const setUserDetails =
        data.map((ele, idx) => {
            if (ele.id == userid.id && ele.profile.username == userid.username) {
                return (
                    <>
                        <span className='flex relative items-center justify-center w-full bg-blue-400 text-black py-3'>
                            <h1 className='font-semibold text-lg'>USERS DETAILS</h1>
                            <MdOutlineClose className='absolute inline-block text-xl font-semibold text-white right-3 md:hidden'
                                onClick={() => setuserid(null)} />
                        </span>

                        <span className='flex gap-y-3.5 flex-col items-center justify-center w-full'>
                            <span className='flex gap-y-1.5 flex-col items-center justify-center w-full'>
                                <img src={ele.avatar} alt="profile photo" className='rounded-full h-32 w-32' />
                                <h3 className='text-base font-semibold'>{ele.profile.username}</h3>
                            </span>

                            <span className='flex text-left text-sm gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#0000001a] sm:px-5'>
                                <span className='text-left'>{ele.Bio}</span>
                            </span>

                            <span className='flex flex-col gap-y-1.5 items-start justify-center w-full'>
                                <h3 className='text-sm font-semibold text-[#000000a3]'>Full Name</h3>
                                <span className='flex  text-sm gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#0000001a]'>
                                    <span className='text-left'>{ele.profile.firstName} {ele.profile.lastName}</span>
                                </span>
                            </span>

                            <span className='flex flex-col gap-y-1.5 items-start justify-center w-full'>
                                <h3 className='text-sm font-semibold text-[#000000a3]'>Job Title</h3>
                                <span className='flex text-sm gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#0000001a]'>
                                    <span className='text-left'>{ele.jobTitle}</span>
                                </span>
                            </span>

                            <span className='flex flex-col gap-y-1.5 items-start justify-center w-full'>
                                <h3 className='text-sm font-semibold text-[#000000a3]'>Email</h3>
                                <span className='flex text-sm gap-y-1.5 py-3.5 px-3.5 items-center justify-start w-full rounded-md border-2 border-[#00000052] bg-[#0000001a]'>
                                    <span className='text-left'>{ele.profile.email}</span>
                                </span>
                            </span>
                        </span>
                    </>
                )
            }
        })

    useEffect(() => {

    }, [data])


    return (
        <span className={`flex bg-white duration-300 min-h-screen absolute ${userid != null ? 'translate-x-0' : 'translate-x-full'} gap-y-5 flex-col items-center justify-center px-3.5 py-3.5 sm:py-0 w-full sm:px-6 md:translate-x-0 md:relative sm:min-h-fit`}>

            {
                userid.id != null ?
                    setUserDetails
                    :
                    <>
                        <span className='flex items-center justify-center w-full bg-blue-400 text-black py-3'>
                            <h1 className='font-semibold text-lg'>USERS DETAILS</h1>
                        </span>

                        <span className='pt-36 text-xs text-center h-full max-h-28 italic w-full'>
                            "select any user and click on it to fetch the details"
                        </span>
                    </>
            }
        </span>
    )
}

export default UsersDetails