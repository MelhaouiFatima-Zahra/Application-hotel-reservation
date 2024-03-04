import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BookingSummary = ({booking, payment , isFormValid, onConfirm}) => {
    const checkInDate = moment(booking.checkInDate)
    const checkOutDate = moment(booking.checkOutDate)
    const numOfDays = checkOutDate.diff(checkInDate, "days")
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
    const [isProccessingPayment, setIsProccessingPayment] = useState(false)
    const navigate = useNavigate()
    const handleConfirmationBooking = () => {
        setIsProccessingPayment(true)
        setTimeout(() => {
            setIsProccessingPayment(false)
            setIsBookingConfirmed(true)
            onConfirm()
        }, 3000)
    }
    useEffect(() =>{
        if(isBookingConfirmed){
            navigate("/booking-success")
        }
    }, [isBookingConfirmed, navigate])
   
  return (
    <div className='card card-body mt-5'>
        <h4>Reservation Summary </h4>
        <p>
            FullName : <strong>{booking.guestFullName}</strong>
        </p>
        <p>
            Email : <strong>{booking.guestEmail}</strong>
        </p>
        <p>
            Check-In Date : <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
        </p>
        <p>
            Check-Out Date : <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
        </p>
        <p>
           Number of Days : <strong>{numOfDays}</strong>
        </p>
        <div>
               <h5> Number of Guest </h5>
               <p> Adult{booking.numberOfAdults > 1 ? "s" :""} :
               <strong>
                   {booking.numberOfAdults}
               </strong>
               </p>
               <p> 
               Children : 
               <strong>
                  {booking.numberOfChildren}
               </strong>
               </p>
        </div>

    {
        payment > 0 ? (
            <>
            <p>
                Total Payment : <strong>${payment}</strong>
            </p>
           
            {isFormValid && !isBookingConfirmed ? (
                <Button 
                variant='success'
                onClick={handleConfirmationBooking}
                >
                   {isProccessingPayment ? (
                    <>
                    <span 
                    className='sprinner-border spinner-border-sm mr-2'
                    role='status'
                    aria-hidden='true'
                    ></span>
                    Booking Confrimed, redirecting to payment
                </>
                   ) :(  
                    "Confirm Booking and procced to payement"
                     )}
                </Button>
            ) :  isBookingConfirmed ?(
               <div className='d-flex justify-content-center align-items-center'>
               <div className='spinner-border text-primary' role='status'> 
                    <span className='sr-only'> 
                        Loading...
                    </span>
               
               </div>
               </div>
            ) : null }
             </>
        ) : (
            <p className='text-danger'> Check-out date must be after chek-in date </p>
        )}
    </div>
  )
}

export default BookingSummary