import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signup = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox label={"First Name"} placeholder={"Raghu"} />
            <InputBox label={"Last Name"} placeholder={"Anand"} />
            <InputBox label={"Email"} placeholder={"raghu@gmail.com"} />
            <InputBox label={"Password"} placeholder={"******"} />

            <div className='pt-4'>
                <Button label={"Sign Up"} onClick={""}/>
            </div>

            <BottomWarning label={"Already have an account? "} buttonText={"Sing in"} to={"/signin"}/>
        </div>
      </div>  
    </div>
  )
}

export default Signup
