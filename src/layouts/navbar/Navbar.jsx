import React from "react";
import { Icon } from "../../Icons";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-14 border-b-2 border-gray-200 static   ">
      <a className="font-bold text-2xl pl-52 text-text-color ">haberify</a>

      <div className="flex gap-5 items-center pr-32">
      <a className="items-center text-sm  ">Doğukan Özgür Yılmaz</a>
      
       
        <img
          className=" h-10 w-10 rounded-full  "
          alt= "profile" src="https://api.lorem.space/image/face?"
        ></img>
      

      </div>
      
    </div>
  );
}
