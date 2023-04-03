import React from 'react'
import { Icon } from '../../Icons'

export default function ProfileBanner() {
  return (
    <div>
           <div className='w-full bg-profilebg h-[240px] flex rounded-br-3xl items-center align-middle '>
<div className='ml-8 '>
    <div className='bg-white rounded-2xl py-2 px-2 mb-2'><Icon name="settingsicon" size={24}></Icon></div>
    <div className='bg-white rounded-2xl py-2 px-2 mb-2'><Icon name="mail" size={24}></Icon></div>
    <div className='bg-white rounded-2xl py-2 px-2'><Icon name="verifyicon" size={24}></Icon></div>

</div>
<div className='mr-64 ml-4'>
    <h1 className='text-white text-xl'>Doğukan Özgür Yılmaz</h1>
    <a className='text-white font-light'>@dogukanozgurylmz</a>
</div>
<div className='mr-56  '>
    <img src='https://api.lorem.space/image/face?' className='rounded-3xl  mt-12  h-[112px] w-[112px] object-cover '></img>
    <div className='flex justify-center  py-6 '>
    <Icon name="locationicon" size="24"></Icon>
    <a className='text-white'>Rize</a>
    </div>
   
</div>
<div className='mr-28 text-center  '><div className='h-[53px] py-3 w-[188px] mb-3 bg-transparent border-2 border-white rounded-2xl text-white font-light'>Takipçi 111</div>
<div className='h-[53px]  w-[188px] bg-transparent border-2 mb-3 py-3 border-white rounded-2xl text-white font-light '>Takip edilen 10</div>
<div className='h-[53px] w-[188px] bg-transparent border-2  py-3 border-white rounded-2xl text-white font-light'>Haberler 3</div>
</div>

        </div>
    </div>
  )
}
