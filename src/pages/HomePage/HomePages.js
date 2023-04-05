import React from 'react'
import HomePage from './HomePage'
import SideBar from '../../layouts/sidebar/SideBar'
import Navbar from '../../layouts/navbar/Navbar'

export default function HomePages() {
  return (
    <div>

<Navbar></Navbar>
    <div className="flex w-full pl-52 mt-4 pr-52 ">
        <SideBar></SideBar>
      <HomePage></HomePage>
    </div>
    </div>
  )
}
