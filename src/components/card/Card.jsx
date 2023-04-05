import React from 'react'

export default function Card() {
  return (
    <div>
        <div className='my-3 mx-3 cursor-pointer '>
            <img className='h-[220px] w-[450px] rounded-3xl object-cover' src='https://api.lorem.space/image/car?'>
            </img>
            <div className='backdrop-blur-md bg-black/30  rounded-3xl absolute -mt-16 py-3 mx-3 px-36'><h2 className='text-white font-bold'>Lorem Ipsum</h2></div>

        </div>
     
    </div>
  )
}
