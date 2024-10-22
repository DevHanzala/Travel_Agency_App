import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Emirates from '../images/Rectangle 3 (27).jpg';
import pilot from '../images/Frame 186 (3).jpg';
import family from '../images/Frame 185.jpg';
import crew from '../images/Frame 184.jpg';
import seats from '../images/Frame 183.jpg';
import window from '../images/Frame 182.jpg';
import flightview from '../images/Frame 142.jpg';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import emirateslogo from '../images/kisspng-dubai-airbus-a380-emirates-airline-logo-5adaedbb89d2d6 1 (5).png';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import WifiIcon from '@mui/icons-material/Wifi';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";

export default function FlightDetail() {
    const [flightDetails, setFlightDetails] = useState({
        rating: "4.2",
        reviews: 54,
        times: "2h 28m",
        duration: "2h 28m",
        airline: "Emirates",
        route: "Newark (EWR) to Istanbul",
        price: 240
    });

    const [isBusinessClass, setIsBusinessClass] = useState(false); // State for Business class
    const [isFirstClass, setIsFirstClass] = useState(false); // State for First class

    // Use useEffect to retrieve data from localStorage on component mount
    useEffect(() => {
        const savedFlight = JSON.parse(localStorage.getItem('savedFlight'));
        if (savedFlight) {
            setFlightDetails(prevDetails => ({
                ...prevDetails,
                rating: savedFlight.rating || prevDetails.rating,
                reviews: savedFlight.reviews || prevDetails.reviews,
                times: savedFlight.times || prevDetails.times,
                duration: savedFlight.duration || prevDetails.duration,
                airline: savedFlight.airline || prevDetails.airline,
                route: savedFlight.route || prevDetails.route,
                price: savedFlight.price || prevDetails.price
            }));
        }
    }, []);

    // Handler for Business class checkbox
    const handleBusinessClassChange = (event) => {
        setIsBusinessClass(event.target.checked);
        setIsFirstClass(false); // Deselect First class
        updatePrice(event.target.checked ? 100 : -100);
    };

    // Handler for First class checkbox
    const handleFirstClassChange = (event) => {
        setIsFirstClass(event.target.checked);
        setIsBusinessClass(false); // Deselect Business class
        updatePrice(event.target.checked ? 150 : -150);
    };

    // Update flightDetails price
    const updatePrice = (amount) => {
        setFlightDetails(prevDetails => ({
            ...prevDetails,
            price: prevDetails.price + amount
        }));
    };

    return (
        <div>
            <Navbar/>
            <div className="w-[95%] mx-auto mt-5 p-2 md:mb-20">
                <p>
                    <span className="text-[#FF8682]">Turkey</span>
                    <KeyboardArrowRightIcon />
                    <span className="text-[#FF8682]">Istanbul</span>
                    <KeyboardArrowRightIcon /> CVK Park Bosphorous Hotel Istanbul
                </p>

                <div className="flex items-center justify-between mt-3">
                    <div className="space-y-2">
                        <h2 className="font-bold text-4xl">{flightDetails.airline} A380 Airbus</h2>
                        <p><LocationOnIcon /> Gummmsy mah innou Cad No:8 Istanbul 34437</p>
                        <p>
                            <span className="border-2 rounded-sm border-[#8DD3BB] py-1 px-2 mr-1">{flightDetails.rating}</span>
                            <span className="font-bold mr-1">Very Good</span> {flightDetails.reviews} reviews
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-[#FF8682] font-bold text-4xl text-right">{flightDetails.price}</h2>
                        <p>
                            <span className="border-2 rounded-sm border-[#8DD3BB] p-1 mr-1">
                                <FavoriteBorderIcon />
                            </span>
                            <span className="font-bold mr-1 border-2 rounded-sm p-1 border-[#8DD3BB]">
                                <ShareIcon />
                            </span>
                            <span className="font-bold mr-1 cursor-pointer py-2 rounded-md px-6 bg-[#8DD3BB]">
                                <Link to={'/bookingdetail'}>
                                    Book now
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>


                <div>
                    <img src={Emirates} className="w-full h-[60vh] object-cover my-5 rounded-md" alt="Emirates A380" />
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-2xl">Basic Economy Feature</h2>
                    </div>
                    <div>
                        <FormControlLabel 
                            control={<Checkbox checked={isFirstClass} onChange={handleFirstClassChange} sx={{ color: '#8DD3BB', '&.Mui-checked': { color: '#8DD3BB' } }} />} 
                            label="First class" 
                        />
                        <FormControlLabel 
                            control={<Checkbox checked={isBusinessClass} onChange={handleBusinessClassChange} sx={{ color: '#8DD3BB', '&.Mui-checked': { color: '#8DD3BB' } }} />} 
                            label="Business class" 
                        />
                    </div>
                </div>

                {/* Conditional Rendering Based on Class Selection */}
                {isBusinessClass && (
                    <div className="bg-[#8DD3BB99] p-4 rounded-md my-4">
                        <h3 className="font-bold">Business Class Perks:</h3>
                        <ul className="list-disc ml-6">
                            <li>Increased legroom</li>
                            <li>Priority boarding</li>
                            <li>Access to lounge</li>
                            <li>Complimentary meals and drinks</li>
                        </ul>
                    </div>
                )}
                {isFirstClass && (
                    <div className="bg-[#8DD3BB99] p-4 rounded-md my-4">
                        <h3 className="font-bold">First Class Perks:</h3>
                        <ul className="list-disc ml-6">
                            <li>Spacious seating</li>
                            <li>Exclusive lounge access</li>
                            <li>Gourmet meals</li>
                            <li>Premium beverages</li>
                        </ul>
                    </div>
                )}

                <div className="flex items-center justify-evenly space-x-2 p-1">
                    <div><img src={pilot} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Pilot" /></div>
                    <div><img src={flightview} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Flight View" /></div>
                    <div><img src={window} className="w-[140px] h-[100px] object-contain rounded-xl" alt="Window" /></div>
                    <div><img src={family} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Family" /></div>
                    <div><img src={window} className="w-[140px] h-[100px] object-contain rounded-xl" alt="Family" /></div>
                    <div><img src={family} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Family" /></div>
                    <div><img src={family} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Family" /></div>
                    <div><img src={seats} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Seats" /></div>
                    <div><img src={crew} className="w-[150px] h-[150px] object-contain rounded-xl" alt="Crew" /></div>
                </div>
                <h3 className="font-bold text-2xl mt-10">Schedule</h3>
                <div className="flex items-center justify-between my-4">
                    <div className="space-x-1">
                        <h3 className="font-bold text-lg">Departure</h3>
                        <h3 className="text-sm">12:20 PM</h3>
                    </div>
                    <div className="space-x-1">
                        <h3 className="font-bold text-lg">Arrival</h3>
                        <h3 className="text-sm">10:30 PM</h3>
                    </div>
                </div>
                <div className="flex items-center justify-between my-4">
                    <div className="space-x-1">
                        <h3 className="font-bold text-lg">Duration</h3>
                        <h3 className="text-sm">{flightDetails.times}</h3>
                    </div>
                    <div className="space-x-1">
                        <h3 className="font-bold text-lg">Airline</h3>
                        <h3 className="text-sm">{flightDetails.airline}</h3>
                    </div>
                </div>

                <div className="my-10">
                    <h3 className="font-bold text-2xl">Flight Features</h3>
                    <div className="flex items-center space-x-4 my-4">
                        <div className="flex items-center">
                            <AirplanemodeActiveIcon />
                            <span className="ml-2">Free Cabin</span>
                        </div>
                        <div className="flex items-center">
                            <WifiIcon />
                            <span className="ml-2">Wi-Fi</span>
                        </div>
                        <div className="flex items-center">
                            <DinnerDiningIcon />
                            <span className="ml-2">Food & Drinks</span>
                        </div>
                        <div className="flex items-center">
                            <AirlineSeatReclineExtraIcon />
                            <span className="ml-2">Reclining Seats</span>
                        </div>
                    </div>
                </div>

                <h3 className="font-bold text-2xl mt-10">Choose Your Flight Class</h3>
                <div className="flex space-x-4">
                    <FormControlLabel 
                        control={<Checkbox checked={isFirstClass} onChange={handleFirstClassChange} sx={{ color: '#8DD3BB', '&.Mui-checked': { color: '#8DD3BB' } }} />} 
                        label="First Class" 
                    />
                    <FormControlLabel 
                        control={<Checkbox checked={isBusinessClass} onChange={handleBusinessClassChange} sx={{ color: '#8DD3BB', '&.Mui-checked': { color: '#8DD3BB' } }} />} 
                        label="Business Class" 
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
