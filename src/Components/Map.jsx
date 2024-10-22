import mapImg from '../images/map.png'
import Button from '@mui/material/Button';
export function Map(){
    return(
        <div className="md:mt-36  w-full">
            <div className="flex items-center justify-around">
                <div>
<h3 className="font-bold text-2xl">Let's go places togeher</h3>
<p className="mt-1 text-sm font-thin">Discover the latest offer and news and start planning next trip with us.</p>
                </div>
                <Button variant="outlined" color='black'>See All</Button>
            </div>
            <div className='mt-5 mb-3'>
                <img src={mapImg} alt='map' className='h-[60vh] w-[100%]'/>
            </div>
        </div>
    )
}