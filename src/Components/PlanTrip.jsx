import turkey from '../images/Rectangle 3 (10).jpg';
import sydney from '../images/Rectangle 3 (11).jpg';
import baku from '../images/Rectangle 3 (12).jpg';
import male from '../images/Rectangle 3 (13).jpg';
import paris from '../images/Rectangle 3 (30).jpg';
import nyc from '../images/Rectangle 4 (4).jpg';
import london from '../images/Rectangle 3 (31).jpg';
import tokyo from '../images/Rectangle 3 (32).jpg';
import dubai from '../images/Rectangle 4 (5).jpg';
import flights from '../images/Rectangle 40.jpg'
import hotels from '../images/Rectangle 41.jpg'
import NearMeIcon from '@mui/icons-material/NearMe';
import {Link} from 'react-router-dom'


import { Typography } from "@mui/material";
import Button from '@mui/material/Button';

export function PlanTrip() {
  return (
    <div>
      <div className="w-[1030px] h-[542px] mt-52 mx-auto">
        <div className=' flex items-center  justify-between px-6'>
          <div>
            <div><Typography variant="h6" className='font-extrabold p-2'>Plan Your Perfect Trip</Typography></div>
            <div><Typography variant="p" className='font-thin p-2'>Search Flights & places Hire to Our most Popular
              destinations</Typography></div>
          </div>
          <Button variant="outlined" color='black'>See more places</Button>
        </div>
        <div className="flex flex-wrap justify-between p-2 space-y-4">
          {/* First Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={turkey} alt="Turkey" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Istanbul, Turkey</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Second Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={sydney} alt="Australia" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Sydney, Australia</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Third Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={baku} alt="Azerbaijan" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Baku, Azerbaijan</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Fourth Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={male} alt="Maldives" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Male, Maldives</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Fifth Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={paris} alt="France" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Paris, France</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Sixth Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={nyc} alt="US" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">New York, US</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Seventh Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={london} alt="UK" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">London, UK</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Eighth Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={tokyo} alt="Japan" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Tokyo, Japan</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>

          {/* Ninth Box */}
          <div className="flex items-center justify-center space-x-3 p-4 w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div>
              <img src={dubai} alt="UAE" className="rounded object-cover h-[90px] w-[90px]" />
            </div>
            <div>
              <p className="font-bold">Dubai, UAE</p>
              <p>Flights . Hotels . Resorts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8 mb-2">
        {/* First Card */}
        <div className="relative w-[504px] h-[459px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={flights}
            alt="Sample 1"
            className="w-full h-full object-cover filter brightness-110"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end p-6 space-y-3"> {/* Adjusted for bottom text */}
            <p className="text-white font-bold text-3xl font-mono">Flights</p>
            <p className="text-white w-[389px] text-center font-thin">
              Search Flight & Places Hire to our most popular destination
            </p>
            <Link to={'/flightSearch'}>
            <button className="flex items-center bg-[#8DD3BB] rounded text-white text-lg font-bold px-4 py-2 drop-shadow-lg">
              <NearMeIcon /> Show Flights
            </button></Link>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative w-[504px] h-[459px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src={hotels}
            alt="Sample 2"
            className="w-full h-full object-cover filter brightness-110" // Add brightness
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end p-6 space-y-3"> {/* Adjusted for bottom text */}
            <p className="text-white font-bold text-3xl font-mono">Hotels</p>
            <p className="text-white w-[389px] text-center font-thin">
              Search Flight & Places Hire to our most popular destination
            </p>
            <button className="flex items-center bg-[#8DD3BB] rounded text-white text-lg font-bold px-4 py-2 drop-shadow-lg">
              <NearMeIcon /> Show Hotels
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}