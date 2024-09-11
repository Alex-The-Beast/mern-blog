import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { signInFailure,signInSuccess,signInStart } from '../redux/user/userSlice'




const SignIn = () => {
  const [formData,setFormData]=useState({})
  // const [errorMessage,setErrorMessage]=useState(null)
  // const [loading,setLoading]=useState(false)
  const {loading,error:errorMessage}=useSelector(state =>state.user)
  const dispatch =useDispatch()
  const navigate=useNavigate()
  //storing user data in local host
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()}) //yha spread operator hr form k data ko store rkhta hai and target id btata hai data ka source
  }
  //this is for submit data to backend
  const handleSubmit =async(e)=>{
    e.preventDefault()
    if( !formData.email || !formData.password){
      return dispatch(signInFailure('Please all the fields'))
    }
    try{
      // setLoading(true)
      // setErrorMessage(null)
      dispatch(signInStart())
      const res=await fetch('/api/v1/auth/signin',{
        method:'POST',   //we add proxy in vit.config bcoz there are port/url diff btw front and backend
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const data=await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message))
       
      }
      // setLoading(false)
      // this navigate comes from react router dom ,if everything is ok then it navigate to sign in page
      if (res.ok){
          dispatch(signInSuccess(data))
          navigate('/')
      }

    }catch(error){
     dispatch(signInFailure(error.message))
  
    }

  }
  return (
    <div className='min-h-screen mt-20 '>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row 
      md:items-center gap-5">
        {/* left sie */}
        <div className="flex-1">
        <Link 
        to='/' 
        className=' font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-600 rounded-lg text-white'>
               Arnav's </span>
                Blog
            </Link>
            <p className="text-sm mt-5 font-bold">
              This is a demo project.You can sign in  with your email and 
              Password
              or with Google.
              </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'  onSubmit=
            {handleSubmit}>
            {/* <div>
              <Label value='Your username' ></Label>
              <TextInput type="text" placeholder="Username" id='username' onChange=
              {handleChange}/>
            </div> */}

            <div>
              <Label value='Your Email' ></Label>
              <TextInput type="email" placeholder="Email" id='email' onChange=
              {handleChange}/>
            </div>

            <div>
              <Label value='Your password' ></Label>
              <TextInput type="password" placeholder="Password" id='password' onChange=
                {handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>{
              loading ? (
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading....</span>
                </>
                
              ):('Sign In')
                   
             }</Button>

          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link 
              to='/sign-up'
              className='text-blue-500'>
                Sign Up
              </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default SignIn


