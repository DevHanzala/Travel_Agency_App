import rectangleImage from '../images/Rectangle-31.jpg';
import { Navbar } from './Navbar';
import { Typography } from '@mui/material';
import { TextFieldTable } from './TextFielTable';

export function Background() {
  return (
    <div
      className="relative h-[599px] w-[96%] top-[30px] left-[30px] rounded-[24px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${rectangleImage})`,
      }}
    >
      {/* Dark overlay for reducing brightness */}
      <div className="absolute inset-0 bg-black opacity-25 rounded-[24px]"></div>

      <div className="relative z-10">
        <Navbar />
        <div className='text-center my-24 space-y-0 text-white'>
          <Typography variant="h3" fontWeight={500}>Helping Others</Typography>
          <Typography variant="h1" className='font-[TradeGothic LT Extended]' fontWeight={700}>
            LIVE & TRAVEL
          </Typography>
          <Typography variant="p" className='font-bold'>Special Offer to suit your plan</Typography>
        </div>

        <TextFieldTable />
      </div>
    </div>
  );
}
