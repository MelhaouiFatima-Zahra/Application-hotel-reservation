import React from 'react'
import HeaderMain from '../layout/HeaderMain'
import HotelService from '../common/HotelService'
import Parallax from '../common/Parallax'
import RoomCarousel from '../common/RoomCarousel'
const home = () => {
  return (
    <section>
       <HeaderMain />
       <section className='container mt-5'>
          <RoomCarousel />
          <HotelService />
          <Parallax />
    
       </section>
      
    </section>
  )
}

export default home