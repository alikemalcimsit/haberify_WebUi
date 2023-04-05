import React from 'react'

import Card from '../../components/card/Card'
import ScroolTag from '../../components/scrooltag/ScroolTag'

export default function DiscoveryPage() {
  return (
    <div  className=' w-[800px]   ml-8 h-screen mb-5  '>
      <ScroolTag></ScroolTag>
      <div className='grid grid-cols-2 gap-4'>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </div>
     
    </div>
  )
}
