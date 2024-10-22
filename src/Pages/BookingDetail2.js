import { Navbar } from "../Components/Navbar";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import emirateslogo from '../images/kisspng-dubai-airbus-a380-emirates-airline-logo-5adaedbb89d2d6 1 (5).png';
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
import ModalParagraphSelector from "../Components/ModalParagraphselector";
import React, { useState } from 'react'; // Import React and useState

export default function BookingDetail2() {
    // State to manage pricing details
    const [baseFare, setBaseFare] = useState(400);
    const [discount, setDiscount] = useState(0);
    const [taxes, setTaxes] = useState(50); // Example tax amount
    const [serviceFee, setServiceFee] = useState(50); // Example service fee
    const [total, setTotal] = useState(baseFare + taxes + serviceFee - discount);

    // Function to update pricing details based on selections
    const updatePricing = (newBaseFare, newDiscount, newTaxes, newServiceFee) => {
        setBaseFare(newBaseFare);
        setDiscount(newDiscount);
        setTaxes(newTaxes);
        setServiceFee(newServiceFee);
        setTotal(newBaseFare + newTaxes + newServiceFee - newDiscount);
    };

    // Example of how you might use updatePricing
    const handleSelectionChange = (option) => {
        if (option === "paragraph1") {
            updatePricing(400, 0, 50, 50); // Example values for full payment
        } else if (option === "paragraph2") {
            updatePricing(500, 100, 50, 50); // Example values for installment payment
        }
    };

    return (
        <div>
            <Navbar />

            <div className="w-[95%] mx-auto p-2 md:mb-44 mt-4">
                <p className="text-sm mt-5">
                    <span className="text-[#FF8682]">Turkey</span>
                    <KeyboardArrowRightIcon />
                    <span className="text-[#FF8682]">Istanbul</span>
                    <KeyboardArrowRightIcon /> CVK Park Bosphorous Hotel Istanbul
                </p>

                <div className="flex items-start justify-between space-x-1 p-2">
                    <div className="space-y-2 shadow-xl rounded-md p-4 bg-white my-6 borcer-2 mt-2 w-[55vw]"> {/* Parent div with shadow */}
                        <p className="text-3xl font-bold">Emirates A380 Airbus</p>
                        <div className="flex justify-between">
                            <p>Return Wed, Dec 8</p>
                            <p>2h 28m</p>
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
                            <p className="font-bold">12:00 pm</p>
                            <p>Newark (EWR)</p>
                            <p><WestIcon /></p>
                            <p><AirplanemodeActiveIcon /></p>
                            <p><EastIcon /></p>
                            <p className="font-bold">12:00 pm</p>
                            <p>Newark (EWR)</p>
                        </div>
                    </div>
                    <div className="rounded-md p-2 bg-white shadow-xl">
                        <div className="flex items-center space-x-3 justify-between">
                            <div>
                                <img src={plane} className="w-[100px] h-[100px] rounded-md object-cover" />
                            </div>
                            <div>
                                <p className="font-thin">Economy</p>
                                <h2 className="font-bold text-3xl">Emirates A380 Airbus</h2>
                                <p className="mt-5"><span className="border-2 p-1 mx-1">4.2</span><span className="font-bold mx-1">Very Good</span>54 reviews</p>
                            </div>
                        </div>

                        <p className="my-4 border-t-2 border-b-2 p-2">Your booking is protected by <span className="font-bold">globe</span></p>
                        <div className="p-2">
                            <p className="font-bold">Price Details</p>
                            <div className="flex items-center justify-between"><p>Base Fare</p><p>${baseFare}</p></div>
                            <div className="flex items-center justify-between"><p>Discount</p><p>${discount}</p></div>
                            <div className="flex items-center justify-between"><p>Taxes</p><p>${taxes}</p></div>
                            <div className="flex items-center justify-between pb-2"><p>Service Fee</p><p>${serviceFee}</p></div>
                            <div className="flex items-center justify-between border-t-2 pt-1"><p>Total</p><p>${total}</p></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white shadow-xl p-2 mt-6 w-[55vw]">
                        <ModalParagraphSelector onSelectionChange={handleSelectionChange} />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
