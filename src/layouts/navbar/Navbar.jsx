import React from "react";
import { Icon } from "../../assets/icons/Icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center   h-14 border-b-2 border-gray-200 static   ">
      <Link to="/" className="font-bold text-2xl pl-52 text-text-color ">haberify</Link>

      <div className="flex gap-5 items-center pr-52  ">
      <a className="items-center text-sm  ">Doğukan Özgür Yılmaz</a>
      
       
        <img
          className=" h-10 w-10 rounded-full object-cover  "
          alt= "profile" src="https://api.lorem.space/image/face?"
        ></img>
      

      </div>
      
    </div>
  );
}
