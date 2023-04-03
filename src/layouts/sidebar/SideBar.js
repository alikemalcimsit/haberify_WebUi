import React from 'react'
import Buttons from './Buttons'
import Label from './Label'
import RecomendedAccount from './RecomendedAccount'

export default function SideBar(props) {
  return (
    <div className='w-1/4'>
  <Buttons></Buttons><RecomendedAccount></RecomendedAccount><Label></Label> 

    </div>
  )
} 
