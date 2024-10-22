import React, { useRef } from 'react';
import { Navbar } from '../Components/Navbar';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { Footer } from '../Components/Footer';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

export default function Ticket() {
    const ticketRef = useRef(null);
    const currentDate = new Date().toLocaleDateString();

    const ticketDetails = {
        airlineName: 'Emirates Airlines',
        flightTime: '08:45 AM',
        price: '$400',
        cardNumber: '**** **** **** 1234',
        expDate: '12/25',
        nameOnCard: 'John Doe',
        cvc: '123',
        country: 'USA',
        bookingID: '#12345678XYZ'
    };

    const handleDownload = () => {
        const confirmButton = document.getElementById('confirm-button');
        confirmButton.style.display = 'none';

        htmlToImage.toPng(ticketRef.current)
            .then((dataUrl) => {
                download(dataUrl, 'ticket.png');
            })
            .catch((error) => {
                console.error('Failed to download image:', error);
            })
            .finally(() => {
                confirmButton.style.display = 'block';
            });
    };

    const handleConfirmClick = () => {
        alert('Your ticket has been confirmed! You can now download your ticket.');
    };

    return (
        <div>
            <Navbar />

            <div className="w-[95%] mx-auto mt-5 p-2 md:mb-20">
                <p>
                    <span className="text-[#FF8682]">Turkey</span>
                    <KeyboardArrowRightIcon />
                    <span className="text-[#FF8682]">Istanbul</span>
                    <KeyboardArrowRightIcon /> CVK Park Bosphorous Hotel Istanbul
                </p>

                <div className="flex items-center justify-between mt-3">
                    <div className="space-y-2">
                        <h2 className="font-bold text-4xl">A380 Airbus</h2>
                        <p><LocationOnIcon /> Gummmsy mah innou Cad No:8 Istanbul 34437</p>
                        <p>
                            <span className="border-2 rounded-sm border-[#8DD3BB] py-1 px-2 mr-1">4.2</span>
                            <span className="font-bold mr-1">Very Good</span> 30 reviews
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-[#FF8682] font-bold text-4xl text-right">{ticketDetails.price}</h2>
                        <p>
                            <span className="border-2 rounded-sm border-[#8DD3BB] p-1 mr-1">
                                <FavoriteBorderIcon />
                            </span>
                            <span className="font-bold mr-1 border-2 rounded-sm p-1 border-[#8DD3BB]">
                                <ShareIcon />
                            </span>
                            <span className="font-bold mr-1 cursor-pointer py-2 rounded-md px-6 bg-[#8DD3BB]">
                                <button onClick={handleDownload}>Download</button>
                            </span>
                        </p>
                    </div>
                </div>

                <div ref={ticketRef} id="ticket" className="mt-10 p-6 border-2 border-gray-300 rounded-lg shadow-md w-[95%] mx-auto bg-[#8DD3BB]">
                    <h3 className="text-xl font-mono font-bold mb-4">Your Airline Ticket</h3>
                    
                    <div className="flex justify-between mb-4">
                        <div>
                            <p className="text-lg font-semibold">Airline Name:</p>
                            <p className="text-md">{ticketDetails.airlineName}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Flight Time:</p>
                            <p className="text-md">{ticketDetails.flightTime}</p>
                        </div>
                    </div>

                    <div className="flex justify-between mb-4">
                        <div>
                            <p className="text-lg font-semibold">Date:</p>
                            <p className="text-md">{currentDate}</p>
                        </div>
                        <div className='flex space-x-2 justify-center items-center'>
                            <p className="text-lg font-semibold">Price:</p>
                            <p className="text-md">{ticketDetails.price}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <p className="text-lg font-semibold">Card Number:</p>
                            <p className="text-md">{ticketDetails.cardNumber}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Expiration Date:</p>
                            <p className="text-md">{ticketDetails.expDate}</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4">
                        <div>
                            <p className="text-lg font-semibold">Name on Card:</p>
                            <p className="text-md">{ticketDetails.nameOnCard}</p>
                        </div>
                        <div className='flex items-center justify-center space-x-2'>
                            <p className="text-lg font-semibold">CVC:</p>
                            <p className="text-md">{ticketDetails.cvc}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-lg font-semibold">Country/Region:</p>
                        <p className="text-md">{ticketDetails.country}</p>
                    </div>

                    <div className="mt-6 border-t-2 pt-4 border-black flex justify-between items-center">
                        <div>
                            <p className="text-lg font-semibold">Boarding Pass QR Code:</p>
                            <QrCodeIcon style={{ fontSize: 80 }} className="text-black" />
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">Booking ID:</p>
                            <p className="text-md">{ticketDetails.bookingID}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button
                            id="confirm-button"
                            className="bg-white py-2 px-6 text-black rounded-md"
                            onClick={handleConfirmClick}
                        >
                            Confirm Ticket
                        </button>
                    </div>
                </div>

                {/* Terms and Conditions Section */}
                <div className="mt-10 p-6 border-2 border-gray-300 rounded-lg shadow-md w-[95%] mx-auto bg-white">
                    <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
                    <p className="mb-2">1. All tickets are non-refundable.</p>
                    <p className="mb-2">2. Changes to the flight date or time can be made up to 24 hours before departure.</p>
                    <p className="mb-2">3. Please carry a valid ID proof while traveling.</p>
                    <p className="mb-2">4. In case of cancellations, please refer to our cancellation policy.</p>
                    <p className="mb-2">5. We are not responsible for any missed connections due to delays.</p>

                    <h3 className="text-xl font-bold mt-4">Privacy Policy</h3>
                    <p className="mb-2">1. We value your privacy and are committed to protecting your personal information.</p>
                    <p className="mb-2">2. Your information will only be used for booking and service-related purposes.</p>
                    <p className="mb-2">3. We do not share your personal information with third parties without your consent.</p>
                    <p className="mb-2">4. Please review our full privacy policy on our website for more details.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
