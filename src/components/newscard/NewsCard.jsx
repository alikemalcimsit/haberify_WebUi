import React, { useState } from 'react'
import { Icon } from '../../assets/icons/Icons'

export default function NewsCard(props) {
const [liked, setliked] = useState(false)
  return (
    <div>
       <div className="  h-[550px] w-[800px]  mb-4  ">
       <div className=" py-7  px-2 z-10 mx-52 my-2 right-0  absolute h-[535px] w-[380px]  backdrop-blur-lg bg-white/30 rounded-3xl ">
     <div> <h4 className="font-bold  pb-5">Lorem Ipsum</h4>
      <p className="font-normal h-96  text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at viverra dui. Aenean efficitur maximus neque non faucibus. Morbi faucibus eget arcu non fermentum. Nunc convallis dictum erat, non elementum orci pharetra et. Fusce accumsan magna pretium maximus dapibus. Pellentesque ut pellentesque sapien, id porta lacus. Ut eu convallis erat. Nam cursus turpis vehicula dui finibus rutrum. Morbi metus ligula, convallis eget hendrerit eget, molestie in ex.
Quisque bibendum turpis non dapibus dapibus. Nulla efficitur semper sapien id pharetra. Nunc a diam...</p></div>
      <div className="flex  justify-between  items-center mt-10   ">
    <div className="flex align-middle items-center">
    <span ><img alt="" className='rounded-full h-8 w-8 mr-2 object-cover'  src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium text-black">dogukanozgurylmz</a>
      </div>
      <div className="flex align-middle items-center gap-2">
      <a onClick={()=>{setliked(!liked)}} className='cursor-pointer'>{liked ? <Icon name="likedicon" size="20"></Icon> : <Icon name="likeicon" size="24"></Icon>}</a>
      <a>192</a>
      <a className='cursor-pointer' onClick={()=>{props.setOpenComment(!props.openComment)}}><Icon name="commenticon" size="24"></Icon></a>
      <a>6</a>
      <Icon name="shareicon" size="20"></Icon>
      </div>
    </div>
  
      </div>
        <img alt="" src="https://api.lorem.space/image/album?" className=" h-full   w-full  rounded-3xl object-cover"></img>
       
     
   
    
      </div>
    </div>
  )
}
