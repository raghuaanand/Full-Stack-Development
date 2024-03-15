import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signin = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign in"}/>
          <SubHeading label={"Enter your credentials to access your account"}/>
          <InputBox label={"Email"} placeholder={"raghu@gmail.com"} type={"text"} onChange={(e) => {

          }}/>
          <InputBox label={"Password"} placeholder={"******"} type={"password"} onChange={(e) => {

          }}/>
          <div className='pt-4'>
            <Button label={'Sign In'}/>
          </div>

          <BottomWarning label={"Don't have and account? "} to={'/signup'} buttonText={'Sign up'}/>
        </div>
      </div>
    </div>
  )
}

export default Signin
