import React, { useState } from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import Box from '@mui/material/Box';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { InputAdornment } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link } from 'react-router-dom';

export function TextFieldTable() {
  const [fromTo, setFromTo] = useState('Lahore - Karachi');
  const [trip, setTrip] = useState('Return');
  const [departReturn, setDepartReturn] = useState('07 Nov 22 - 13 Nov 22');
  const [passengerClass, setPassengerClass] = useState('1 Passenger, Economy');

  // Function to handle saving form data to local storage
  const handleSaveToLocalStorage = () => {
    const flightDetails = {
      fromTo,
      trip,
      departReturn,
      passengerClass,
    };
    localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
  };

  return (
    <div>
      <div className="w-[1030px] h-[230px] space-y-5 bg-white p-2 mx-auto my-24 rounded-lg shadow-lg">
        <div className="flex justify-start space-x-2 items-center">
          <button className="flex items-center text-[#112211] text-lg font-bold px-4 py-2 drop-shadow-lg border-b-4 border-[#8DD3BB]">
            <FlightIcon className="mr-2 text-2xl" /> Flights
          </button>
          <div className="h-8 border-l-2 border-gray-300"></div>
          <button className="flex items-center text-[#112211] text-lg font-bold px-4 py-2 drop-shadow-lg">
            <BedIcon className="mr-2 text-2xl" /> Stays
          </button>
        </div>

        <div className="flex justify-start items-center">
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                label="From - To"
                id="outlined-size-small"
                value={fromTo}
                onChange={(e) => setFromTo(e.target.value)}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SyncAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl size="small" style={{ width: '150px', marginTop: '7px' }}>
                <InputLabel id="trip-label">Trip</InputLabel>
                <Select
                  labelId="trip-label"
                  id="outlined-size-small"
                  value={trip}
                  onChange={(e) => setTrip(e.target.value)}
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
                value={departReturn}
                onChange={(e) => setDepartReturn(e.target.value)}
                size="small"
              />
              <TextField
                label="Passenger - class"
                id="outlined-size-small"
                value={passengerClass}
                onChange={(e) => setPassengerClass(e.target.value)}
                size="small"
              />
            </div>
          </Box>
        </div>

        <div className="flex justify-end items-center space-x-1 mr-10">
          <button className="flex items-center text-[#112211] text-lg font-bold px-4 py-2 drop-shadow-lg">
            + Add Promo code
          </button>
          <Link to={'/flightlisting'}>
            <button
              className="flex items-center bg-[#8DD3BB] rounded text-white text-lg font-bold px-4 py-2 drop-shadow-lg"
              onClick={handleSaveToLocalStorage}
            >
              <NearMeIcon /> Show Flights
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
