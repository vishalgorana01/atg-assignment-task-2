import React from 'react'
import UsersList from '../components/UsersList'
import UsersDetails from '../components/UsersDetails'
import PreLoader from '../components/Loader'

function Home() {
  return (
    <>
    {/* <div className='absolute bg-black flex items-center justify-center h-screen w-screen overflow-hidden'
    onLoad={(ele) => ele.currentTarget.style.display = 'none'}>
        <PreLoader />
    </div> */}
    <section className='flex items-center justify-center w-screen overflow-x-clip'>
        <div className='flex py-0 items-center justify-center w-full max-w-7xl md:py-16'>
            <div className='relative flex items-start justify-center w-full gap-x-5'>
                <UsersList />
                <UsersDetails />
            </div>
        </div>
    </section>
    </>
  )
}

export default Home