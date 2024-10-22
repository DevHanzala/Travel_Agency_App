import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import melbourne from '../images/Rectangle 3 (22).jpg';
import eiffeltower from '../images/Rectangle 4 (1).jpg';
import london from '../images/Rectangle 5 (2).jpg';
import colombia from '../images/Rectangle 6 (2).jpg';

export function TravelPlan() {
    return (
        <div className='px-12'>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-2xl">Fall into travel</h3>
                    <p className="mt-1 text-sm ">Going somewhere to celebrate this season? Where you're going home or somewhere to roam, we've got</p>
                    <p className='text-sm'>the travel tools to get you to your destination.</p>
                </div>
                <Button variant="outlined" color='black'>See All</Button>
            </div>

            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                        {/* Image */}
                        <img src={melbourne} alt="Beautiful Landscape" className="w-[296px] h-[350px] object-cover" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 px-4 left-0 right-0 text-white text-center py-2">
                            <div className="flex items-center justify-between px-1">
                                <div className="text-left">
                                    <p className="font-bold">Melbourne</p>
                                    <p className="font-thin text-sm">An Amazing Journey</p>
                                </div>
                                <p className="font-bold">$700</p>
                            </div>
                            <Link to="/flightlisting">
                                <button className="bg-[#8DD3BB] text-black p-2 mt-2 rounded w-full">Book Flight</button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                        {/* Image */}
                        <img src={eiffeltower} alt="Beautiful Landscape" className="w-[296px] h-[350px] object-cover" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 px-4 left-0 right-0 text-white text-center py-2">
                            <div className="flex items-center justify-between px-1">
                                <div className="text-left">
                                    <p className="font-bold">Paris</p>
                                    <p className="font-thin text-sm">A Paris Adventure</p>
                                </div>
                                <p className="font-bold">$600</p>
                            </div>
                            <Link to="/flightlisting">
                                <button className="bg-[#8DD3BB] text-black p-2 mt-2 rounded w-full">Book Flight</button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                        {/* Image */}
                        <img src={london} alt="Beautiful Landscape" className="w-[296px] h-[350px] object-cover" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 px-4 left-0 right-0 text-white text-center py-2">
                            <div className="flex items-center justify-between px-1">
                                <div className="text-left">
                                    <p className="font-bold">London</p>
                                    <p className="font-thin text-sm">London Eye Adventure</p>
                                </div>
                                <p className="font-bold">$350</p>
                            </div>
                            <Link to="/flightlisting">
                                <button className="bg-[#8DD3BB] text-black p-2 mt-2 rounded w-full">Book Flight</button>
                            </Link>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                        {/* Image */}
                        <img src={colombia} alt="Beautiful Landscape" className="w-[296px] h-[350px] object-cover" />
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 px-4 left-0 right-0 text-white text-center py-2">
                            <div className="flex items-center justify-between px-1">
                                <div className="text-left">
                                    <p className="font-bold">Colombia</p>
                                    <p className="font-thin text-sm">Amazing Streets</p>
                                </div>
                                <p className="font-bold">$700</p>
                            </div>
                            <Link to="/flightlisting">
                                <button className="bg-[#8DD3BB] text-black p-2 mt-2 rounded w-full">Book Flight</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
