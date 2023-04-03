import React from 'react'

import ProfileBanner from '../../components/profilebanner/ProfileBanner'
import ProfileCard from '../../components/profilecard/ProfileCard'

export default function ProfilePage() {
  return (
    <div>
     <ProfileBanner></ProfileBanner>
     <div className='grid grid-cols-3 mx-56 mt-5'>
     <ProfileCard></ProfileCard>
     <ProfileCard></ProfileCard>
     <ProfileCard></ProfileCard>
     </div>
  
    </div>
  )
}
