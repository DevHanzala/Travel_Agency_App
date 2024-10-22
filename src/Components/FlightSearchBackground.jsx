import { Typography } from '@mui/material';
import { TextFieldTable } from './TextFielTable';
import { Navbar } from '../Components/Navbar';

export function FlightSearchBackground() {
  return (
    <div
      className="relative h-[100vh] w-[100%]"
      style={{
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/8535/598d/d79d82bf9c6a77a53ab28436f5a42b70?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPVI93dphikpMB0r24AqGNFTkvJ1VgnJ826LTnXTMt7j0o58KJVJqg9SkwIdYnbtq1uzCpMY2FzfRtWwgiwK-PdSHciy6vyRFidH5skRQGjD2iF5L7IUbGDBAkvNpbXPFxw6u538w~snEEgRuCJCm9tPt~HnTKCf52esUItdPFuNjkCpVh~wK4FV6mQJBJkPk9CHN64xx~iCTQIbgVq~oi3IfPBmZppl5BOvkUlJSz6TdkF3hYFavqD7D0urX0rDta~weKtbXSRLgYGCBVAAJaVCwS0xaRxB5k3pbxNQ67bvs~1SX7zSVtWe8owBaYJ9hHkEQ9cRNzCaPS9Fgc-A7A__")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      
      {/* Dark overlay for reducing brightness */}
      <div className="absolute inset-0"></div>
      
      <div className="relative z-50">
        {/* Text Content */}
        <div className="text-white md:pt-14 md:pl-14">
          <Typography variant="h4" fontWeight={300} fontFamily={'cursive'}>
            Make Your travel
          </Typography>
          <Typography variant="h4" fontWeight={300} fontFamily={'cursive'}>
            Wishlist, we'll do 
          </Typography>
          <Typography variant="h4" fontWeight={300} fontFamily={'cursive'}>
            the rest 
          </Typography>
          <Typography variant="p" className="text-gray-200">
            Special Offer to suit your plan
          </Typography>
        </div>
        <div className="absolute bottom-[-550px] left-[550px] transform -translate-x-1/2 z-20 w-full md:w-2/3">
          <TextFieldTable />
        </div>
      </div>
    </div>
  );
}
