import React from "react";

import { Icon } from "../../Icons";
import NewsCard from "../../components/newscard/NewsCard";

export default function HomePage() {

  return (
    <div >
    
      <div className="flex-col flex ml-8 h-screen mb-5 ">
     <NewsCard></NewsCard>
      <div className="mb-7 "> <div className="flex items-center">
      <span ><img alt="" className='rounded-full h-8 w-8 mr-2'   src="https://api.lorem.space/image/face?"></img></span>
          <a  className="text-base font-medium text-black">dogukanozgurylmz</a>
      </div>
      <div className="w-[900px]">     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div></div>
     

<div className="mb-7"> <div className="flex items-center">
      <span ><img alt="" className='rounded-full h-8 w-8 mr-2'  src="https://api.lorem.space/image/face?"></img></span>
          <a className="text-base font-medium text-black">dogukanozgurylmz</a>
      </div>
      <div className="w-[900px]">     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div></div>
     <div className="flex ">
     <input type="text" placeholder="Write Comment" className="border-2 border-gray-500 w-[800px] mb-7 h-10 rounded-3xl px-4"></input>
    <button className=" w-20 h-10 rounded-3xl  border-2 border-gray-500  px-5"><Icon name="commenticon" size="32"  ></Icon></button>
     
     </div>




      </div>
   
    </div>
  );
}
