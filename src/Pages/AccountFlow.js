import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext"; // Ensure this path is correct
import { Navbar } from "../Components/Navbar";
import background from '../images/Rectangle 3.jpg';
import { Footer } from "../Components/Footer";

export default function AccountFlow() {
  const { user } = useContext(AuthContext); // Access user data from context
  const [activeSection, setActiveSection] = useState('account'); // Default section
  const [travelHistory] = useState([ // Dummy travel history data
    {
      bookingID: "#12345678",
      airline: "Emirates Airlines",
      flightTime: "08:45 AM",
      date: "2024-10-22",
      price: "$400",
      cardNumber: "**** **** **** 1234",
      expDate: "12/25",
      nameOnCard: "John Doe",
      cvc: "123",
      country: "USA",
    },
    {
      bookingID: "#87654321",
      airline: "Qatar Airways",
      flightTime: "09:30 AM",
      date: "2024-10-23",
      price: "$450",
      cardNumber: "**** **** **** 5678",
      expDate: "11/26",
      nameOnCard: "Jane Smith",
      cvc: "456",
      country: "USA",
    },
  ]);

  const date = new Date();

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="p-4 space-y-5">
            <h4 className="text-xl font-bold">Account Details</h4>
            <div>
              <p className="text-sm font-thin">Name</p>
              <p>{user.userInfo.name}</p>
            </div>
            <div>
              <p className="text-sm font-thin">Email</p>
              <p>{user.userInfo.email}</p>
            </div>
            <div>
              <p className="text-sm font-thin">Phone Number</p>
              <p>+92-000-000-000</p>
            </div>
            <div>
              <p className="text-sm font-thin">Password</p>
              <p>***********</p>
            </div>
            <div>
              <p className="text-sm font-thin">Address</p>
              <p>St-32 Main Down-Town Los Angeles California, USA</p>
            </div>
            <div>
              <p>Date</p>
              <p>{date.toLocaleDateString()}</p>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="p-4">
            <h4 className="text-xl font-bold">Travel History</h4>
            {travelHistory.length > 0 ? (
              travelHistory.map((ticket, index) => (
                <div key={index} className="mt-4 p-4 border-2 border-gray-300 bg-[#8DD3BB] rounded-lg">
                  <h5 className="text-lg font-bold">Booking ID: {ticket.bookingID}</h5>
                  <p>Airline: {ticket.airline}</p>
                  <p>Flight Time: {ticket.flightTime}</p>
                  <p>Date: {ticket.date}</p>
                  <p>Price: {ticket.price}</p>
                  <p>Card Number: {ticket.cardNumber}</p>
                  <p>Expiration Date: {ticket.expDate}</p>
                  <p>Name on Card: {ticket.nameOnCard}</p>
                  <p>CVC: {ticket.cvc}</p>
                  <p>Country: {ticket.country}</p>
                </div>
              ))
            ) : (
              <p>No travel history available.</p>
            )}
          </div>
        );
      case 'payment':
        return (
          <div className="p-4">
            <h4 className="text-xl font-bold">Payment Methods</h4>
            <div className="flex flex-col space-y-4">
              {/* Sample Credit Card UI */}
              <div className="bg-[#8DD3BB] text-white p-4 rounded-lg shadow-lg relative">
                <div className="absolute top-4 right-4 text-lg font-bold">Visa</div>
                <div className="text-2xl font-bold">**** **** **** 1234</div>
                <div className="flex justify-between mt-2 text-sm">
                  <div>
                    <p>Name on Card</p>
                    <p className="font-bold">John Doe</p>
                  </div>
                  <div>
                    <p>Expiry Date</p>
                    <p className="font-bold">12/25</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#8DD3BB] text-white p-4 rounded-lg shadow-lg relative">
                <div className="absolute top-4 right-4 text-lg font-bold">MasterCard</div>
                <div className="text-2xl font-bold">**** **** **** 5678</div>
                <div className="flex justify-between mt-2 text-sm">
                  <div>
                    <p>Name on Card</p>
                    <p className="font-bold">Jane Smith</p>
                  </div>
                  <div>
                    <p>Expiry Date</p>
                    <p className="font-bold">11/26</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <h5 className="font-bold">Add New Payment Method</h5>
                <p className="text-sm">To add a new payment method, please click here.</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-[96vw] mx-auto p-2 mb-28">
        <div>
          <img src={background} className="object-fit h-[400px] rounded-lg w-full" />
        </div>

        {/* User Info Section */}
        <div className="flex items-center flex-col justify-center space-y-4">
          {user.isLogin ? (
            <>
              <div className="flex items-center space-x-4">
                {user.userInfo.photoURL ? (
                  <img
                    src={user.userInfo.photoURL}
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full border-4 border-green-500"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold">
                    {user.userInfo.name ? user.userInfo.name.charAt(0) : "U"}
                  </div>
                )}
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold">{user.userInfo.name}</h2>
                  <p className="text-lg font-thin">{user.userInfo.email}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-xl font-bold">User not logged in</p>
          )}
        </div>

        <div className="my-3 bg-white px-2 shadow-xl">
          <div className="flex items-center justify-between p-2 border-2">
            <h3
              className={`border-r-2 w-[300px] text-center cursor-pointer ${activeSection === 'account' ? 'font-bold border-b-2 border-green-500' : ''}`}
              onClick={() => setActiveSection('account')}
            >
              Account
            </h3>
            <h3
              className={`border-r-2 w-[300px] text-center cursor-pointer ${activeSection === 'history' ? 'font-bold border-b-2 border-green-500' : ''}`}
              onClick={() => setActiveSection('history')}
            >
              Travel History
            </h3>
            <h3
              className={`w-[300px] text-center cursor-pointer ${activeSection === 'payment' ? 'font-bold border-b-2 border-green-500' : ''}`}
              onClick={() => setActiveSection('payment')}
            >
              Payment Methods
            </h3>
          </div>
        </div>

        {/* Render the content based on the active section */}
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
