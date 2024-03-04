import React, { useState } from 'react'

const RoomFilter = ({data , setFilteredData}) => {
    const [filter, setFilter] = useState("")


    const  handleSelectChange  = (e) => {
         const selectedRoomTypes = e.target.value 
         setFilter(selectedRoomTypes)
         const filtredRooms = data.filter((room) => 
         room.roomType.toLowerCase()
         .includes(selectedRoomTypes.toLowerCase()))
         setFilteredData(filtredRooms)

    }
    const clearFilter  = () =>{
        setFilter("")
        setFilteredData(data)
    }

    const roomTypes = ["", ...new Set(data.map((room) => room.roomType))]
  return (
    <div className='input-group mb-3'>
        <span className='input-group-text' id="room-type-filter">
            Filter Rooms By Type
        </span>
        <select className="f orm-select" value={filter} onChange={handleSelectChange} >
            <option value={""}> Selected a room type to filter ...</option>
            {
                roomTypes.map((type , index) => (
                    <option key={index} value={String(type)}>
                        {String(type)}
                    </option>
                ))
            }
        </select>
        <button className="btn btn-hotel" type='button' onClick={clearFilter}>Clear Filter</button>
    </div>
  )
}

export default RoomFilter