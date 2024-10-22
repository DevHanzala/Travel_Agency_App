import React, { useEffect, useState } from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import PublicOffOutlinedIcon from '@mui/icons-material/PublicOffOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Utils/Firebase';
import { signOut } from 'firebase/auth';

export function Navbar() {
    const [user, setUser] = useState(null);
    const [activeButton, setActiveButton] = useState('flight'); // default to 'flight'
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        console.log("Logout button clicked");
        try {
            await signOut(auth);
            console.log("User signed out");
            localStorage.removeItem('user');
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error("Error signing out:", error);
            alert("Failed to log out. Please try again.");
        }
    };

    const handleButtonClick = (button) => {
        console.log('Button clicked:', button);  // Debugging
        setActiveButton(button);
        if (button === 'flight') {
            console.log('Navigating to /flightsearch');
            navigate('/flightsearch');
        } else if (button === 'stay') {
            console.log('Navigating to /account');
            navigate('/account');
        }
    };

    return (
        <nav className={`flex items-center justify-between p-3 ${user ? 'bg-white' : 'bg-transparent'}`}>
            {/* Left Buttons */}
            <div className="flex space-x-4">
                <button
                    onClick={() => handleButtonClick('flight')}
                    className={`flex items-center text-lg font-bold px-4 py-2 rounded-lg drop-shadow-lg 
                    border-b-4 ${activeButton === 'flight' ? 'border-green-500' : 'border-transparent'}`}
                >
                    <Link to={'/'}>
                    <FlightIcon className="mr-2 text-2xl" /> Find Flight
                    </Link>
                    
                </button>
                <button
                    onClick={() => handleButtonClick('stay')}
                    className={`flex items-center text-lg font-bold px-4 py-2 rounded-lg drop-shadow-lg 
                    border-b-4 ${activeButton === 'stay' ? 'border-green-500' : 'border-transparent'}`}
                >
                    <Link to={'/account'}>
                    <BedIcon className="mr-2 text-2xl" /> Find Stays
                    </Link>
                    
                </button>
            </div>

            <div className="flex justify-center flex-grow">
                <button
                    style={{ fontFamily: 'cursive' }}
                    className={`text-4xl font-extrabold drop-shadow-lg mr-10 py-2 rounded ${user ? 'text-black' : 'text-white'}`}
                >
                    gl<span className="text-green-500 font-extrabold">
                        <PublicOffOutlinedIcon className="text-3xl" />
                    </span>be
                </button>
            </div>

            <div className="flex space-x-4 items-center">
                {user ? (
                    <>
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full" />
                        ) : (
                            <span className="text-xl font-serif font-extrabold text-black">
                                {user.displayName}
                            </span>
                        )}
                        <button
                            onClick={handleLogout}
                            className="text-white text-lg px-4 py-2 bg-red-600 rounded-lg drop-shadow-lg"
                        >
                            Log out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={'/signin'}>
                            <button className="text-white text-lg px-4 py-2 rounded-lg drop-shadow-lg">
                                Login
                            </button>
                        </Link>
                        <Link to={'/signup'}>
                            <button className="text-black text-lg px-4 bg-white py-2 rounded-lg drop-shadow-lg">
                                Sign up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
