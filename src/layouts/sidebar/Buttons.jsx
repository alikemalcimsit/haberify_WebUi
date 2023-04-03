import React from "react";
import { Icon } from "../../Icons";

export default function Buttons() {
  return (
    <div className="border-b-2 border-gray-200">
      <ul >
        <li className="flex gap-4 align-middle mb-4 items-center cursor-pointer">
          
          <span><Icon name="home" size="30"></Icon></span>
          <a className="text-lg font-medium text-text-color">Ana Sayfa</a>
        </li>
        <li className="flex gap-4 align-middle mb-4 items-center cursor-pointer ">
          
         <span><Icon name="discovery" size="30"></Icon></span>
          <a className="text-lg font-medium text-text-color">Keşfet</a>
        </li>
        <li className="flex gap-4 align-middle mb-4 items-center cursor-pointer">
          
      <span><Icon name="add" size="30"></Icon></span>
          <a className="text-lg font-medium text-text-color ">Haber Ekle</a>
        </li>
        <li className="flex gap-4 align-middle mb-4 items-center cursor-pointer">
          
        <span><Icon name="notification" size="30"></Icon></span>
          <a className="text-lg font-medium text-text-color">Bildirimler</a>
        </li>
      </ul>
    </div>
  );
}
