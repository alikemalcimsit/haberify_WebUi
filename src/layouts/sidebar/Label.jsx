import React from 'react'

export default function Label() {
  return (
    <div>
      <h3 className='text-lg my-4'>Etiketler</h3>
      <div className='flex flex-wrap gap-2'> 
      <a className='bg-text-color rounded-xl p-2 cursor-pointer text-white text-sm' >Trafik kazası</a>
      <a className='bg-text-color rounded-xl p-2 cursor-pointer text-white text-sm' >Zam haberleri</a>
      <a className='bg-text-color rounded-xl p-2 cursor-pointer text-white text-sm' >Sosyal medya</a>
      <a className='bg-text-color rounded-xl p-2 cursor-pointer text-white text-sm' >Teknoloji</a>
      <a className='bg-text-color rounded-xl p-2 cursor-pointer text-white text-sm' >Onaylı kullanıcı</a>
      <a className='bg-text-color rounded-xl p-2 cursor-pointer text-white text-sm' >Ekonomi</a>
      </div>
    
    </div>
  )
}
