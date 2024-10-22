import React, { useEffect, useState } from 'react';
import { Navbar } from "../Components/Navbar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import emirateslogo from '../images/kisspng-dubai-airbus-a380-emirates-airline-logo-5adaedbb89d2d6 1 (5).png'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import WifiIcon from '@mui/icons-material/Wifi';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import plane from '../images/Frame 186 (4).jpg';
import ParagraphSelector from "../Components/ParagraphSelector";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import { Footer } from "../Components/Footer";
import { Link } from 'react-router-dom';

export default function BookingDetails() {
    const [flightDetails, setFlightDetails] = useState({});
    
    useEffect(() => {
        // Retrieve data from local storage
        const storedFlightDetails = JSON.parse(localStorage.getItem('flightDetails')) || {};
        setFlightDetails(storedFlightDetails);
    }, []);

    // Sample base fare
    const baseFare = 400;

    // Calculate discount (5% of base fare)
    const discount = baseFare * 0.05; // 5% discount
    // Set fixed taxes (you can adjust this value as needed)
    const taxes = 50; // Example tax amount
    // Calculate service fee (10% of base fare)
    const serviceFee = baseFare * 0.10; // 10% service fee
    // Calculate total price
    const totalPrice = baseFare - discount + taxes + serviceFee;

    return (
        <div>
            <Navbar />

            <div className="w-[95%] mx-auto p-2 md:mb-44 mt-4">
                <p className="text-sm mt-5">
                    <span className="text-[#FF8682]">{flightDetails.destination || 'Turkey'}</span>
                    <KeyboardArrowRightIcon />
                    <span className="text-[#FF8682]">{flightDetails.city || 'Istanbul'}</span>
                    <KeyboardArrowRightIcon /> CVK Park Bosphorous Hotel Istanbul
                </p>

                <div className="flex items-start justify-between space-x-1 p-2">
                    <div className="space-y-2 shadow-xl rounded-md p-4 bg-white my-6 border-2 mt-2 w-[55vw]">
                        <p className="text-3xl font-bold">{flightDetails.airline || 'Emirates A380 Airbus'}</p>
                        <div className="flex justify-between">
                            <p>Return {flightDetails.returnDate || 'Wed, Dec 8'}</p>
                            <p>{flightDetails.duration || '2h 28m'}</p>
                        </div>
                        <div className="flex items-center justify-between p-2">
                            <div className="flex items-center justify-between space-x-4 border-2 border-gray-300 p-1">
                                <div>
                                    <img src={emirateslogo} className="w-[130px] h-[50px] object-fit" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl">Emirates</h3>
                                    <p className="text-sm font-thin">Airbus A320</p>
                                </div>
                            </div>

                            <div className="flex space-x-2 p-1 rounded-md">
                                <p className="border-r-2 border-gray-300 p-1"><AirplanemodeActiveIcon /></p>
                                <p className="border-r-2 border-gray-300 p-1"><WifiIcon /></p>
                                <p className="border-r-2 border-gray-300 p-1"><AccessTimeFilledIcon /></p>
                                <p className="border-r-2 border-gray-300 p-1"><DinnerDiningIcon /></p>
                                <p className="border-r-2 border-gray-300 p-1"><AirlineSeatReclineExtraIcon /></p>
                            </div>
                        </div>

                        <div className="flex space-x-2 w-full mx-auto items-center justify-evenly p-3 rounded-md">
                            <p className="font-bold">{flightDetails.departureTime || '12:00 pm'}</p>
                            <p>{flightDetails.departureLocation || 'Newark (EWR)'}</p>
                            <p><WestIcon /></p>
                            <p><AirplanemodeActiveIcon /></p>
                            <p><EastIcon /></p>
                            <p className="font-bold">{flightDetails.arrivalTime || '12:00 pm'}</p>
                            <p>{flightDetails.arrivalLocation || 'Newark (EWR)'}</p>
                        </div>
                    </div>

                    <div className="rounded-md p-2 bg-white shadow-xl">
                        <div className="flex items-center space-x-3 justify-between">
                            <div>
                                <img src={plane} className="w-[100px] h-[100px] rounded-md object-cover" />
                            </div>
                            <div>
                                <p className="font-thin">{flightDetails.class || 'Economy'}</p>
                                <h2 className="font-bold text-3xl">{flightDetails.airline || 'Emirates A380 Airbus'}</h2>
                                <p className="mt-5">
                                    <span className="border-2 p-1 mx-1">4.2</span>
                                    <span className="font-bold mx-1">Very Good</span> 54 reviews
                                </p>
                            </div>
                        </div>

                        <p className="my-4 border-t-2 border-b-2 p-2">
                            Your booking is protected by <span className="font-bold">globe</span>
                        </p>
                        <div className="p-2">
                            <p className="font-bold">Price Details</p>
                            <div className="flex items-center justify-between"><p>Base Fare</p><p>${baseFare}</p></div>
                            <div className="flex items-center justify-between"><p>Discount</p><p>-${discount.toFixed(2)}</p></div>
                            <div className="flex items-center justify-between"><p>Taxes</p><p>${taxes}</p></div>
                            <div className="flex items-center justify-between pb-2"><p>Service Fee</p><p>${serviceFee.toFixed(2)}</p></div>
                            <div className="flex items-center justify-between border-t-2 pt-1"><p>Total</p><p>${totalPrice.toFixed(2)}</p></div>
                        </div>
                    </div>
                </div>

                <div>
                    <ParagraphSelector />
                    <div className="bg-white shadow-xl p-2 mt-3 w-[55vw]">
                        <h2 className="font-bold text-2xl my-2">Login or Sign Up to Book</h2>
                        <div className="w-full">
                            <input
                                id="phone"
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-2 my-2 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <p className="my-2 text-gray-500 text-[15px]">We'll call or text you to confirm your number. Standard message and data rate apply. Privacy policy</p>
                        <button className='w-full p-2 text-center my-3 bg-[#8DD3BB] text-black rounded-lg'>
                        <Link to={'/signup'}>
                            Continue
                        </Link>

                        </button>
                                                <div className="flex items-center justify-evenly p-2 my-6">
                            <p className="w-80 h-[1px] bg-gray-600"></p>
                            <p className="font-bold mx-3">or</p>
                            <p className="w-80 h-[1px] bg-gray-600"></p>
                        </div>

                        <div className="flex items-center justify-evenly space-x-6 my-6">
                            <button className="border-2 border-gray-500 p-2 rounded-sm">
                                <GoogleIcon /> <span className="mx-2">Google</span>
                            </button>
                            <button className="border-2 border-gray-500 p-2 rounded-sm">
                                <FacebookIcon /> <span className="mx-2">Facebook</span>
                            </button>
                            <button className="border-2 border-gray-500 p-2 rounded-sm">
                                <AppleIcon /> <span className="mx-2">Apple</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
