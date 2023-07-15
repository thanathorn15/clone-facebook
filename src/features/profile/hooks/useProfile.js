import { useContext } from 'react'
import { ProfileContext } from '../context/ProfilecontextProvider'

export default function useProfile() {
  return (
    useContext(ProfileContext)
  )
}
