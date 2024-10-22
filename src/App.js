import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import { FlightSearch } from './Pages/FlightSearch';
import { FlightListing } from './Pages/FlightListing';
import FlightDetail from './Pages/FlightDetail';
import BookingDetails from './Pages/BookingDetails';
import BookingDetail2 from './Pages/BookingDetail2';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/Signup';
import Ticket from './Pages/Ticket';
import AccountFlow from './Pages/AccountFlow';
import AuthContextProvider from './Context/AuthContext'; // Import the provider

function App() {
  return (
    <div>
      <AuthContextProvider> {/* Use the provider here */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flightsearch" element={<FlightSearch />} />
            <Route path='/flightlisting' element={<FlightListing />} />
            <Route path='/flightdetail' element={<FlightDetail />} />
            <Route path='/bookingdetail' element={<BookingDetails />} />
            <Route path='/bookingdetail2' element={<BookingDetail2 />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/account' element={<AccountFlow />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
