
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import { AddRoom } from './components/room/AddRoom'
import ExistingRooms from "./components/room/ExistingRooms"
import Home from './components/home/Home'
import EditRoom from './components/room/EditRoom'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
import RoomListing from "./components/room/RoomListing"
import Admin from "./components/admin/Admin"
import CheckOut from "./components/booking/CheckOut"
// import BookingSuccess from "./components/booking/BookingSuccess"
function App() {

  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route  path="/" element={ <Home />}/>
            <Route  path="/edit-room/:roomId" element={ <EditRoom />}/>
            <Route  path="/existing-rooms" element={ <ExistingRooms />}/>
            <Route  path="/add-room" element={ <AddRoom/>}/>
            <Route  path="/browse-all-rooms" element={ <RoomListing/>}/>
            <Route  path="/admin" element={ <Admin/>}/>
            <Route  path="/book-room/:roomId" element={ <CheckOut/>}/>
            {/* <Route  path="/booking-success" element={ <BookingSuccess />}/> */}
          </Routes>
         
        </Router>
       <Footer />
      </main>
   
    </>
  )
}

export default App
