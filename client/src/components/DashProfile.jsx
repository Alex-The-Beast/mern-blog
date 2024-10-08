import { TextInput,Button } from 'flowbite-react'
import React from 'react'
import {useSelector} from 'react-redux'

const DashProfile = () => { 
    // this is use for taking image from database or from user login info
    const {currentUser} =useSelector(state=>state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        {/* this is for profile */}
        <h1 className='my-7 text-center font-semibold text-3xl '>Profile</h1>
        <form className='flex flex-col gap-4 '>
            {/* this is for image  */}
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
        <img src={currentUser.profilePicture} alt='user' 
        className='rounded-full w-full h-full border-8 border-[lightgray]' />
        </div> 

        <TextInput type='text' id='username'placeholder='username' defaultValue={currentUser.username}/>
        <TextInput type='email' id='email'placeholder='email' defaultValue={currentUser.email}/>
        <TextInput type='password' id='password' placeholder='password'/>
        <Button type='submit' gradientDuoTone='purpleToBlue' outline >Update</Button>
        </form>
        <div className='text-red-500 flex justify-between mt-5'>
            <span className="cursor-pointer">Delete Account</span>
            <span className="cursor-pointer">Sign Out</span>
        </div>
    </div>
  )
}

export default DashProfile