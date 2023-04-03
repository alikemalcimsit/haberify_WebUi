import React from 'react'
import logo from "../assets/images/logo.png"
export default function LoadingPage() {
  return (
    <div className=' flex flex-col h-screen justify-center items-center' >
    <h1 className=" p-72 font-medium text-6xl text-text-color text-center  ">haberify</h1>
    <img className='h-20' alt="logo" src={logo} ></img>
    </div>
  )
}
