import Box from '@mui/material/Box';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import emirates from '../images/image 40.png'
import dubai from '../images/image 41.png'
import qatar from '../images/image 43.png'
import etihad from '../images/image 45.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import {Footer} from '../Components/Footer'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox'
export function FlightData() {
  const [flightDetails, setFlightDetails] = useState({
    fromTo: '',
    trip: '',
    departReturn: '',
    passengerClass: '',
  });

  useEffect(() => {
    // Retrieve flight details from local storage
    const savedDetails = JSON.parse(localStorage.getItem('flightDetails'));
    if (savedDetails) {
      setFlightDetails(savedDetails);
    }
  }, []);

// ==
const saveFlightToLocalStorage = () => {
  const flightData = {
    rating: currentFlight.rating,
    reviews: currentFlight.reviews,
    times: currentFlight.times,
    duration: currentFlight.duration,
    airline: currentFlight.airline,
    route: currentFlight.route,
    price: currentFlight.price,
  };

  // Save to local storage as a JSON string
  localStorage.setItem('savedFlight', JSON.stringify(flightData));
};


// ===

  // State variables
  const [priceRange, setPriceRange] = useState([50, 1200]);
  const [departureTime, setDepartureTime] = useState([0, 24]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState('');

  // Data for airlines and trips
  const airlines = ['Emirates', 'Fly Dubai', 'Qatar', 'Etihad'];
  const trips = ['Round Trip', 'One way', 'Multi city', 'My dates are Flexible'];

  // Handle price range slider change
  const handlePriceChange = (e, index) => {
    const updatedRange = [...priceRange];
    updatedRange[index] = parseInt(e.target.value);
    setPriceRange(updatedRange);
  };

  // Handle departure time slider change
  const handleTimeChange = (e, index) => {
    const updatedTime = [...departureTime];
    updatedTime[index] = parseInt(e.target.value);
    setDepartureTime(updatedTime);
  };

  // Handle airline selection (checkbox)
  const handleAirlineSelection = (airline) => {
    if (selectedAirlines.includes(airline)) {
      setSelectedAirlines(selectedAirlines.filter((item) => item !== airline));
    } else {
      setSelectedAirlines([...selectedAirlines, airline]);
    }
  };

  // Handle trip selection (radio button)
  const handleTripSelection = (trip) => {
    setSelectedTrip(trip);
  };

  // Handle rating selection
  const handleRatingSelection = (rating) => {
    setSelectedRating(rating);
  };

  const [selectedOption, setSelectedOption] = useState('Best'); // Default option is 'Best'

  // Flight data based on sorting options
  const flightData = {
    Cheapest: {
      rating: '4.0',
      reviews: 25,
      times: '1:30 pm - 03:00 pm',
      duration: '1h 30m',
      price: '$80',
      airline: 'Emirates',
      route: 'EWR-BNA',
    },
    Best: {
      rating: '4.2',
      reviews: 54,
      times: '12:00 pm - 01:28 pm',
      duration: '2h 28m',
      price: '$104',
      airline: 'Emirates',
      route: 'EWR-BNA',
    },
    Quickest: {
      rating: '4.5',
      reviews: 40,
      times: '11:00 am - 12:15 pm',
      duration: '1h 15m',
      price: '$120',
      airline: 'Emirates',
      route: 'EWR-BNA',
    },
  };

  const currentFlight = flightData[selectedOption];  

  return (
    <div>
    <div className='mt-3 mx-auto w-[95vw] pt-3'>

      <div className="flex justify-center space-x-2 items-center"></div>
   <div className="flex justify-evenly items-center shadow-xl p-4 rounded-lg bg-white">
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="From - To"
            id="outlined-size-small"
            value={flightDetails.fromTo}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SyncAltIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControl size="small" style={{ width: '155px', marginTop: '7px' }}>
            <InputLabel id="trip-label">Trip</InputLabel>
            <Select
              labelId="trip-label"
              id="outlined-size-small"
              value={flightDetails.trip}
              label="Trip"
            >
              <MenuItem value="Return">Return</MenuItem>
              <MenuItem value="One-way">One-way</MenuItem>
              <MenuItem value="Multi-city">Multi-city</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Depart - Return"
            id="outlined-size-small"
            value={flightDetails.departReturn}
            size="small"
          />
          <TextField
            label="Passenger - class"
            id="outlined-size-small"
            value={flightDetails.passengerClass}
            size="small"
          />
        </div>
      </Box>
      <button className="bg-[#8DD3BB] p-2 rounded-sm shadow-xl cursor-pointer">
        <SearchIcon/>
      </button>
    </div>

      <div className='flex justify-between items-start mt-4 '>
      <div className='w-[30vw] p-3 shadow-xl bg-white rounded-lg'>
      <p className='font-bold text-2xl font-serif'>Filters</p>

      {/* Price Filter */}
      <div className='flex justify-between items-center'>
        <p>Price</p>
        <ExpandLessIcon />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center w-full my-4 pb-6 border-b-2'>
          <div className='relative w-full max-w-md mb-2'>
            <div className='absolute inset-0 bg-gray-700 h-1 rounded-lg'></div>
            <div className='absolute h-2 bg-green-500 rounded-lg' style={{ left: `${priceRange[0] / 12}%`, right: `${100 - priceRange[1] / 12}%` }}></div>
            <input
              type='range'
              min='50'
              max='1200'
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className='absolute w-full appearance-none bg-transparent pointer-events-auto'
            />
            <input
              type='range'
              min='50'
              max='1200'
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className='absolute w-full appearance-none bg-transparent pointer-events-auto'
            />
          </div>
          <div className='flex justify-between w-full max-w-md mt-2'>
            <span className='text-gray-700 font-bold'>{priceRange[0]}$</span>
            <span className='text-gray-700 font-bold'>{priceRange[1]}$</span>
          </div>
        </div>
      </div>

      {/* Departure Time Filter */}
      <div className='flex justify-between items-center'>
        <p>Departure Time</p>
        <ExpandLessIcon />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center w-full my-4 pb-6 border-b-2'>
          <div className='relative w-full max-w-md mb-2'>
            <div className='absolute inset-0 bg-gray-700 h-1 rounded-lg'></div>
            <div className='absolute h-2 bg-green-500 rounded-lg' style={{ left: `${departureTime[0] * 4.17}%`, right: `${100 - departureTime[1] * 4.17}%` }}></div>
            <input
              type='range'
              min='0'
              max='24'
              value={departureTime[0]}
              onChange={(e) => handleTimeChange(e, 0)}
              className='absolute w-full appearance-none bg-transparent pointer-events-auto'
            />
            <input
              type='range'
              min='0'
              max='24'
              value={departureTime[1]}
              onChange={(e) => handleTimeChange(e, 1)}
              className='absolute w-full appearance-none bg-transparent pointer-events-auto'
            />
          </div>
          <div className='flex justify-between w-full max-w-md mt-2'>
            <span className='text-gray-700 font-bold'>{`${departureTime[0]}:00`}</span>
            <span className='text-gray-700 font-bold'>{`${departureTime[1]}:00`}</span>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className='border-b-2 border-gray-200 pb-6'>
        <div className='flex justify-between items-center'>
          <p>Rating</p>
          <ExpandLessIcon />
        </div>
        <div className='flex items-center justify-evenly w-[240px] mt-2'>
          {[0, 1, 2, 3, 4].map((rating) => (
            <p
              key={rating}
              className={`border-2 px-2 cursor-pointer ${selectedRating === rating ? 'bg-green-500 text-white' : 'border-green-100'}`}
              onClick={() => handleRatingSelection(rating)}
            >
              {rating}+
            </p>
          ))}
        </div>
      </div>

      {/* Airlines Filter */}
      <div className='border-b-2 border-gray-200 pb-6 mt-4'>
        <div className='flex justify-between items-center'>
          <p>Airlines</p>
          <ExpandLessIcon />
        </div>
        <div className='flex flex-col mt-2'>
          {airlines.map((airline) => (
            <p key={airline} className='cursor-pointer' onClick={() => handleAirlineSelection(airline)}>
              <span>{selectedAirlines.includes(airline) ? <CheckBoxIcon /> : <CropSquareIcon />}</span> {airline}
            </p>
          ))}
        </div>
      </div>

{/* ===== */}

      {/* Trips Filter */}
      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          <p>Trips</p>
          <ExpandLessIcon />
        </div>
        <div className='flex flex-col mt-2'>
          {trips.map((trip) => (
            <p key={trip} className='cursor-pointer' onClick={() => handleTripSelection(trip)}>
              <span>{selectedTrip === trip ? <CheckBoxIcon /> : <CropSquareIcon />}</span> {trip}
            </p>
          ))}
        </div>
      </div>
    </div>

        <div className='w-[90vw] pb-2 px-2'>
        <div className='flex w-full justify-center mt-2 space-x-2 bg-white shadow-xl rounded-lg'>
      <div
        className={`flex items-center py-4 space-x-32 cursor-pointer ${
          selectedOption === 'Cheapest' ? 'border-b-4 rounded-md border-green-400' : ''
        }`}
        onClick={() => setSelectedOption('Cheapest')}
      >
        <div className='text-left'>
          <p className='font-bold'>Cheapest</p>
          <p className='font-thin text-sm'>$80 .1h 30m</p>
        </div>
        <div className='h-12 w-[2px] bg-[#D7E2EE]'></div>
      </div>

      <div
        className={`flex items-center py-4 space-x-32 cursor-pointer ${
          selectedOption === 'Best' ? 'border-b-4 rounded-md border-green-400' : ''
        }`}
        onClick={() => setSelectedOption('Best')}
      >
        <div className='text-left'>
          <p className='font-bold'>Best</p>
          <p className='font-thin text-sm'>$104 .2h 28m</p>
        </div>
        <div className='h-12 w-[2px] bg-[#D7E2EE]'></div>
      </div>

      <div
        className={`flex items-center py-4 space-x-32 cursor-pointer ${
          selectedOption === 'Quickest' ? 'border-b-4 rounded-md border-green-400' : ''
        }`}
        onClick={() => setSelectedOption('Quickest')}
      >
        <div className='text-left'>
          <p className='font-bold'>Quickest</p>
          <p className='font-thin text-sm'>$120 .1h 15m</p>
        </div>
        <div className='h-12 w-[2px] bg-[#D7E2EE]'></div>
      </div>

      <div
        className={`flex items-center text-left space-x-2 md:pr-16 py-4 cursor-pointer `}
      >
        <p>Other sort</p>
        <MenuIcon />
      </div>
    </div>


<div className='flex items-center justify-between p-2'>
<p className='my-4 mx-2 font-bold'>
            Show 4 of <span className='text-red-500'> 257 places</span>
          </p>
          <p>
            Sort by <span className='font-semibold'>Recomended <ExpandMoreIcon/></span>
          </p>
</div>
          
<div className='flex space-x-2 p-2 m-2 bg-white shadow-xl'>
      <div className='w-[400px] p-2 px-4'>
        <img src={emirates} className='w-[200px] h-1/2 object-fit' alt='flight' />
      </div>
      <div className='w-full pb-4 p-2'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-5'>
            <div className='flex space-x-2'>
              <p className='border-2 border-gray-200 px-1'>{currentFlight.rating}</p>
              <p>
                <span className='font-bold'>Very Good</span> {currentFlight.reviews} reviews
              </p>
            </div>

            <div>
              <div className='flex space-x-2'>
                <p className='border-2 border-gray-200 p-2'></p>
                <p>
                  <span className='font-bold'>{currentFlight.times}</span>
                  <span className='ml-11'>non-stop</span>
                  <span className='ml-11 font-semibold'>{currentFlight.duration}</span>
                </p>
              </div>
              <div className='flex md:ml-8 justify-between pr-6 w-full'>
                <p className='font-thin text-[13px]'>{currentFlight.airline}</p>
                <p className='font-thin text-[13px]'>{currentFlight.route}</p>
              </div>
            </div>
          </div>
          <div>
            <p className='text-sm font-[5px]'>Starting from</p>
            <p className='font-bold text-2xl pl-5 text-[#FF8682]'>{currentFlight.price}</p>
          </div>
        </div>
        <div className='w-full flex space-x-2 border-t-2 border-gray-200 mt-2 pt-2'>
          <button className='border-2 border-gray-200'>
            <FavoriteBorderIcon />
          </button>
          <Link  className='bg-[#8DD3BB] w-full rounded-sm text-center' to={'/flightdetail'}>
          <button  onClick={saveFlightToLocalStorage}>
            View deals
          </button> 
          </Link>
         
        </div>
      </div>
    </div>

    <div className='flex space-x-2 p-2 m-3 bg-white shadow-xl'>
      <div className='w-[400px] p-2 px-4'>
        <img src={dubai} className='w-[200px] h-1/2 object-fit' />
      </div>
      <div className='w-full pb-4 p-2'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-5'>
            <div className='flex space-x-2'>
              <p className='border-2 border-gray-200 px-1'>{currentFlight.rating}</p>
              <p>
                <span className='font-bold'>Very Good</span> {currentFlight.reviews} reviews
              </p>
            </div>

            <div>
              <div className='flex space-x-2'>
                <p className='border-2 border-gray-200 p-2'></p>
                <p>
                  <span className='font-bold'>{currentFlight.times}</span>
                  <span className='ml-11'>non-stop</span>
                  <span className='ml-11 font-semibold'>{currentFlight.duration}</span>
                </p>
              </div>
              <div className='flex md:ml-8 justify-between pr-6 w-full'>
                <p className='font-thin text-[13px]'>{currentFlight.airline}</p>
                <p className='font-thin text-[13px]'>{currentFlight.route}</p>
              </div>
            </div>

          </div>
          <div>
            <p className='text-sm font-[5px]'>Starting from</p>
            <p className='font-bold text-2xl pl-5 text-[#FF8682]'>{currentFlight.price}</p>
          </div>
        </div>
        <div className='w-full flex space-x-2 border-t-2 border-gray-200 mt-2 pt-2'>
          <button className='border-2 border-gray-200'>
            <FavoriteBorderIcon />
          </button>
          <Link  className='bg-[#8DD3BB] w-full rounded-sm text-center' to={'/flightdetail'}>
          <button  onClick={saveFlightToLocalStorage}>
            View deals
          </button> 
          </Link>
        </div>
      </div>
    </div>

    <div className='flex space-x-2 p-2 m-2 bg-white shadow-xl'>
      <div className='w-[400px] p-2 px-4'>
        <img src={qatar} className='w-[200px] h-1/2 object-fit' />
      </div>
      <div className='w-full pb-4 p-2'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-5'>
            <div className='flex space-x-2'>
              <p className='border-2 border-gray-200 px-1'>{currentFlight.rating}</p>
              <p>
                <span className='font-bold'>Very Good</span> {currentFlight.reviews} reviews
              </p>
            </div>

            <div>
              <div className='flex space-x-2'>
                <p className='border-2 border-gray-200 p-2'></p>
                <p>
                  <span className='font-bold'>{currentFlight.times}</span>
                  <span className='ml-11'>non-stop</span>
                  <span className='ml-11 font-semibold'>{currentFlight.duration}</span>
                </p>
              </div>
              <div className='flex md:ml-8 justify-between pr-6 w-full'>
                <p className='font-thin text-[13px]'>{currentFlight.airline}</p>
                <p className='font-thin text-[13px]'>{currentFlight.route}</p>
              </div>
            </div>

          </div>
          <div>
            <p className='text-sm font-[5px]'>Starting from</p>
            <p className='font-bold text-2xl pl-5 text-[#FF8682]'>{currentFlight.price}</p>
          </div>
        </div>
        <div className='w-full flex space-x-2 border-t-2 border-gray-200 mt-2 pt-2'>
          <button className='border-2 border-gray-200'>
            <FavoriteBorderIcon />
          </button>
          <Link  className='bg-[#8DD3BB] w-full rounded-sm text-center' to={'/flightdetail'}>
          <button  onClick={saveFlightToLocalStorage}>
            View deals
          </button> 
          </Link>
        </div>
      </div>
    </div>

    <div className='flex space-x-2 p-2 m-2 bg-white shadow-xl'>
      <div className='w-[400px] p-2 px-4'>
        <img src={etihad} className='w-[200px] h-1/2 object-fit' />
      </div>
      <div className='w-full pb-4 p-2'>
        <div className='flex justify-between'>
          <div className='flex flex-col space-y-5'>
            <div className='flex space-x-2'>
              <p className='border-2 border-gray-200 px-1'>{currentFlight.rating}</p>
              <p>
                <span className='font-bold'>Very Good</span> {currentFlight.reviews} reviews
              </p>
            </div>

            <div>
              <div className='flex space-x-2'>
                <p className='border-2 border-gray-200 p-2'></p>
                <p>
                  <span className='font-bold'>{currentFlight.times}</span>
                  <span className='ml-11'>non-stop</span>
                  <span className='ml-11 font-semibold'>{currentFlight.duration}</span>
                </p>
              </div>
              <div className='flex md:ml-8 justify-between pr-6 w-full'>
                <p className='font-thin text-[13px]'>{currentFlight.airline}</p>
                <p className='font-thin text-[13px]'>{currentFlight.route}</p>
              </div>
            </div>

            {/* Additional flight details can be added here if necessary */}
          </div>
          <div>
            <p className='text-sm font-[5px]'>Starting from</p>
            <p className='font-bold text-2xl pl-5 text-[#FF8682]'>{currentFlight.price}</p>
          </div>
        </div>
        <div className='w-full flex space-x-2 border-t-2 border-gray-200 mt-2 pt-2'>
          <button className='border-2 border-gray-200'>
            <FavoriteBorderIcon />
          </button>
          <Link  className='bg-[#8DD3BB] w-full rounded-sm text-center' to={'/flightdetail'}>
          <button  onClick={saveFlightToLocalStorage}>
            View deals
          </button> 
          </Link>
        </div>
      </div>
    </div>
          <Link to={'/flightdetail'}>
          <button className='w-[880px] rounded-sm p-2 mx-auto bg-[#112211] text-gray-200
       text-center'>Show more details</button>
          </Link>
     


        </div>
      </div>
    </div>

    <div className='md:mt-40'>
    <Footer/>
    </div>
    </div>
  );
}
