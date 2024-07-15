import React from 'react'
import LocationDetails from '../LocationDetails/LocationDetails'
import Reviews from './Reviews'
import HostSection from './HostSection'
import ThingsToKnow from './ThingsToKnow'

const Listing = () => {
  return (
    <div>
      <LocationDetails/>
      <Reviews/>
      <HostSection />
      <ThingsToKnow />
    </div>
  )
}

export default Listing