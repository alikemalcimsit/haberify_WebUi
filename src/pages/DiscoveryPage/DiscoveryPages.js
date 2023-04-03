import React from 'react'
import DiscoveryPage from './DiscoveryPage'
import SideBar from '../../layouts/sidebar/SideBar'
export default function DiscoveryPages() {
  return (
    <div className="flex w-full pl-52 mt-4 pr-32 ">
        <SideBar></SideBar>
      <DiscoveryPage></DiscoveryPage>
    </div>
  )
}
