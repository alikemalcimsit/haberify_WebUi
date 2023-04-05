import React from 'react'
import ProfilePage from './ProfilePage'
import Navbar from '../../layouts/navbar/Navbar'
export default function ProfilePages() {
  return (
    <div>

   
    <Navbar></Navbar>
    <div className="flex w-full pl-52 mt-4 pr-52 ">
      <ProfilePage></ProfilePage>
    </div>
    </div>
  )
}
