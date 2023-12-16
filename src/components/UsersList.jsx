import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext'

import defaultprofilephoto from '../assets/images/download 2.png'

function UsersList() {
    const { data, setData, setuserid } = useContext(UserContext)
    const [list, setList]  = useState([])

    const getData = () => {

        setList(data.map((ele, idx) => {
            return (
                <li key={idx} className='flex gap-x-3 items-center justify-start px-3.5 w-full cursor-pointer bg-blue-50 text-black py-1.5'
                    onClick={() => setuserid(
                        {
                            username: ele.profile.username,
                            id: ele.id
                        }
                    )}>
                    <img src={ele.avatar || defaultprofilephoto} alt="profile photo" className='h-11 w-11 object-center object-cover rounded-full cursor-pointer hover:bg-blue-200' />
                    <h3 className='text-base font-normal'>{ele.profile.firstName} {ele.profile.lastName}</h3>
                </li>
            )
        }))

    }

    useEffect(() => {
        getData()
    }, [data])

    return (
        <span className='flex absolute gap-y-5 py-3.5 flex-col items-center px-3 justify-center w-full md:relative sm:px-6 sm:py-0'>
            <span className='flex items-center justify-center w-full bg-blue-400 text-black py-3'>
                <h1 className='font-semibold text-lg'>USERS LIST</h1>
            </span>

            <ul className='flex gap-y-1.5 flex-col items-center justify-start w-full max-h-[32rem] overflow-y-scroll'>
                {list}
            </ul>
        </span>
    )
}

export default UsersList