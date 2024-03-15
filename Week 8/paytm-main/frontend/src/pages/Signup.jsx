import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios";

const Signup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox label={"First Name"} placeholder={"Raghu"} type={'text'} onChange={(e) => {
              setFirstName(e.target.value)
            }}/>
            <InputBox label={"Last Name"} placeholder={"Anand"} type={'text'} onChange={(e) => {
              setlastName(e.target.value)
            }}/>
            <InputBox label={"Email"} placeholder={"raghu@gmail.com"} type={'email'} onChange={(e) => {
              setEmail(e.target.value);
            }}/>
            <InputBox label={"Password"} placeholder={"******"} type={"password"} onChange={(e) => {
              setPassword(e.target.value);
            }}/>

            <div className='pt-4'>
                <Button label={"Sign Up"} onClick={async () => {
                  const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    firstName,
                    lastName,
                    password
                  });
                  localStorage.setItem("token", response.data.token)
                  Navigate('/dashboard')
                }} 
                />
            </div>

            <BottomWarning label={"Already have an account? "} buttonText={"Sing in"} to={"/signin"}/>
        </div>
      </div>  
    </div>
  )
}

export default Signup
