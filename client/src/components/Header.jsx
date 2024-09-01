import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link ,useLocation } from 'react-router-dom'
import { TextInput } from 'flowbite-react'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { Button } from 'flowbite-react'




const Header = () => {
    const path =useLocation().pathname
  return (
    
    <Navbar className='border-b-2'>
        {/* //company logo */}
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-lg text-white'>Arnav's </span>Blog</Link>

        {/* //this is for search */}
        <form>
            <TextInput 
            type='text'
            placeholder='search....'
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            />
             
        </form>
        {/* //this is search button for small screen */}
        <Button className="w-12 h-10 lg:hidden" color='gray' pill>
            <AiOutlineSearch/>
        </Button>
    

         {/* // this is toggle button */}
        <div  className='flex gap-2 md:order-2'>
            <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                <FaMoon/>
            </Button>

             {/* //sign in button  */}
            <Link to='/sign-in'>
            <Button  gradientDuoTone='purpleToBlue' > Sign In</Button>
            </Link>
            <Navbar.Toggle/>
            </div>
          <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/'
                >Home</Link>
            </Navbar.Link>

            <Navbar.Link  active={path === '/about'} as={'div'}>
                <Link to='/about'
                >About</Link>
            </Navbar.Link>

            <Navbar.Link  active={path === '/project'} as={'div'}>
                <Link to='/project'
                >Projects</Link>
            </Navbar.Link>


          </Navbar.Collapse>
       
        </Navbar>
  )
}

export default Header
