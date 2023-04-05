import React from 'react'
import DiscoveryPage from './DiscoveryPage'
import SideBar from '../../layouts/sidebar/SideBar'
import Navbar from '../../layouts/navbar/Navbar'
export default function DiscoveryPages() {
  return (
    <div>
      <Navbar></Navbar>
    <div className="flex w-full pl-52 mt-4 pr-52 ">
        <SideBar></SideBar>
      <DiscoveryPage></DiscoveryPage>
    </div>
    </div>
  )
}
