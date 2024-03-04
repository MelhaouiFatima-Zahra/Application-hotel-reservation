import React, { useEffect, useState } from 'react'
import { getAllRooms } from '../utils/ApiFunctions'
import RoomCard from './RoomCard'
import { Col, Container, Row } from 'react-bootstrap'
import RoomFilter from '../common/RoomFilter'
import RoomPagination from '../common/RoomPagination'

const Room = () => {
    const [data , setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [roomsPerPage] =useState(6)
    const [filtredData, setFiltredData] = useState([{id:""}])

    useEffect(() =>{
        setIsLoading(true)
        getAllRooms().then((data) =>{
            setData(data)
            setFiltredData(data)
            setIsLoading(false)
        }).catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [])
    if(isLoading){
        return <div>Loading rooms....</div>
    }
    if(error){
        return <div className='text-danger'>Error : {error} </div>
    }

    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    const totlePages = Math.ceil(filtredData.length / roomsPerPage)

    const renderRooms = () => {
        const startIndex = (currentPage - 1) * roomsPerPage
        const endIndex = startIndex + roomsPerPage
        return filtredData.slice(startIndex, endIndex)
        .map((room) => <RoomCard key={room.id} room = {room} />)
    }

  return (
    <Container>
        <Row>
            <Col md={6} className='mb-3 mb-md-0'>
                <RoomFilter data={data} setFilteredData={setFiltredData} />
            </Col>

            
        </Row>

        <Row>
            {renderRooms()}
        </Row>

        <Row>
            <Col md={6} className="d-flex align-items-center justify-content-end">
                <RoomPagination 
                currentPage={currentPage}  
                totalPages={totlePages} 
                onPageChange={handlePageChange}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Room