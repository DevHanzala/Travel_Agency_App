import { Link } from '@mui/material';
import f1 from '../images/Rectangle 3 (23).jpg'
import f2 from '../images/Rectangle 3 (24).jpg'
import f3 from '../images/Rectangle 3 (25).jpg'
import f4 from '../images/Rectangle 3 (26).jpg'



import Button from '@mui/material/Button';
export function Srilanka(){
    return(
        <div className="mt-4 px-14 md:mb-28">
             <div className="flex items-center justify-between mb-2">
                <div>
<h3 className="font-bold text-2xl">Fall into travel</h3>
<p className="mt-1 text-sm ">Going somewhere to celebrate this season? whwre yoy're going home or
     somewhere to roam, we've got the travel tools or get you to your</p>
<p className=' text-sm'> detination.</p>
                </div>
                <Button variant="outlined" color='black'>See All</Button>
            </div>
            <div className="flex items-center justify-between  mx-auto w-full">
  <div className="left bg-[#8DD3BB] px-4 py-3 w-1/2 rounded-lg">
    <div className="flex items-start justify-between">
      <div>
        <h4 className="font-bold text-3xl font-mono">Backpacking</h4>
        <h4 className="font-bold text-3xl font-mono">SriLanka</h4>
      </div>
      <div className="bg-white p-1 rounded-md">
        <p>From</p>
        <p className="font-bold">$700</p>
      </div>
    </div>
    <p className="mt-5 mb-16 text-sm font-thin">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae odit
      earum qui expedita id impedit quis deleniti quam molestiae, eos cum beatae
      libero nulla repellendus a, explicabo quibusdam. quis deleniti quam molestiae, eos cum beatae
      libero nulla repellendus a, explicabo  Consequatur.
    </p>
    <Link to={'/flightlisting'}>
    <button className="bg-white w-full p-2 text-sm">Book Flight</button>    
    </Link>
  </div>

  <div className="right space-y-2 ">
    <div className="flex space-x-4">
      <div>
        <img src={f1} className="w-[258px] h-[140px] rounded-md object-fit" />
      </div>
      <div>
        <img src={f2} className="w-[258px] h-[140px] rounded-md object-fit" />
      </div>
    </div>
    <div className="flex space-x-4">
      <div>
        <img src={f3} className="w-[258px] h-[140px] rounded-md object-fit" />
      </div>
      <div>
        <img src={f4} className="w-[258px] h-[140px] rounded-md object-fit" />
      </div>
    </div>
  </div>
</div>
        </div>
    )
}