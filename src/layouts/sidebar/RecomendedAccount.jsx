import React from 'react'

export default function RecomendedAccount() {
  return (
    <div className='border-b-2 border-gray-200 '>
    <h3 className='text-lg my-4'>Güvenli Hesaplar</h3>
    <ul>
        <li className='flex gap-4 align-middle mb-4 items-center cursor-pointer'> 
          <span ><img className='rounded-full h-8 w-8' src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium text-text-color">dogukanozgurylmz</a></li>
        <li  className='flex gap-4 align-middle mb-4 items-center cursor-pointer'> 
          <span><img className='rounded-full h-8 w-8'  src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium  text-text-color">dogukanozgurylmz</a></li>
        <li  className='flex gap-4 align-middle mb-4 items-center cursor-pointer'> 
          <span><img className='rounded-full h-8 w-8'  src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium text-text-color">dogukanozgurylmz</a></li>
        <li  className='flex gap-4 align-middle mb-4 items-center cursor-pointer'> 
          <span><img className='rounded-full h-8 w-8'   src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium text-text-color">dogukanozgurylmz</a></li>
        
    </ul>
    </div>
  )
}
