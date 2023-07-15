import React from 'react'
import ProfileContainer from '../features/profile/components/ProfileContainer'
import ProfileContextProvider from '../features/profile/context/ProfilecontextProvider'

export default function ProfilePage() {
  return (
    <ProfileContextProvider>
    <ProfileContainer/>
    </ProfileContextProvider>
  )
}
