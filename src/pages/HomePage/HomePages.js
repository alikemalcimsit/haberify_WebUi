import React from 'react'
import HomePage from './HomePage'
import SideBar from '../../layouts/sidebar/SideBar'

export default function HomePages() {
  return (
    <div className="flex w-full pl-52 mt-4 pr-32 ">
        <SideBar></SideBar>
      <HomePage></HomePage>
    </div>
  )
}
