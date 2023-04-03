import React from 'react'
import { Icon } from '../../Icons'

export default function NewsCard() {
  return (
    <div>
       <div className="  h-[550px] w-[900px]  mb-4  ">
      <img alt="" src="https://api.lorem.space/image/album?" className=" h-full   w-full  rounded-3xl object-cover"></img>
      <div className="absolute py-7  px-2 top-20 right-32 mr-2 h-[535px] w-[420px]  backdrop-blur-lg bg-white/30 rounded-3xl ">
     <div> <h4 className="font-bold  pb-5">Lorem Ipsum</h4>
      <p className="font-normal h-96  text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at viverra dui. Aenean efficitur maximus neque non faucibus. Morbi faucibus eget arcu non fermentum. Nunc convallis dictum erat, non elementum orci pharetra et. Fusce accumsan magna pretium maximus dapibus. Pellentesque ut pellentesque sapien, id porta lacus. Ut eu convallis erat. Nam cursus turpis vehicula dui finibus rutrum. Morbi metus ligula, convallis eget hendrerit eget, molestie in ex.
Quisque bibendum turpis non dapibus dapibus. Nulla efficitur semper sapien id pharetra. Nunc a diam...</p></div>
      <div className="flex  justify-between  items-center mt-10   ">
    <div className="flex align-middle items-center">
    <span ><img alt="" className='rounded-full h-8 w-8 mr-2'  src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium text-black">dogukanozgurylmz</a>
      </div>
      <div className="flex align-middle items-center gap-2">
      <Icon name="likeicon" size="20"></Icon>
      <a>192</a>
      <Icon name="commenticon" size="24"></Icon>
      <a>6</a>
      <Icon name="shareicon" size="20"></Icon>
      </div>
    </div>
  
      </div>
    
      </div>
    </div>
  )
}
