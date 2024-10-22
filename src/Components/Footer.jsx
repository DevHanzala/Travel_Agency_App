import box from '../images/ssBox3.png';
import PublicOffOutlinedIcon from '@mui/icons-material/PublicOffOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <div className="relative mb-2">
      <div className="bg-[#8DD3BB] w-full h-[330px] pb-2 md:pt-48 px-8">
        <div className='flex justify-evenly'>
          <div className='space-y-2'>
            <button
              style={{ fontFamily: 'cursive' }}
              className="text-black text-3xl font-extrabold drop-shadow-lg rounded"
            >
              gl<span className="text-green-500 font-extrabold"><PublicOffOutlinedIcon className="text-2xl" /></span>be
            </button>
            <div className="flex space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 " />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-blue-400 " />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 " />
              </a>
            </div>

          </div>
          <div>
            <h3 className='font-bold'>Our Destinations</h3>
            <p className='font-thin'>Canada</p>
            <p className='font-thin'>Australia</p>
            <p className='font-thin'>Alaska</p>
            <p className='font-thin'>IceLand</p>
          </div>
          <div>
            <h3 className='font-bold'>Our Activities</h3>
            <p className='font-thin'>Northern lights</p>
            <p className='font-thin'>Cruising & sailing</p>
            <p className='font-thin'>Multi-activities</p>
            <p className='font-thin'>Kayaing</p>
          </div>
          <div>
            <h3 className='font-bold'>Travel Blogs</h3>
            <p className='font-thin'>Bali Travel Guide</p>
            <p className='font-thin'>Srilanka Travel Guide</p>
            <p className='font-thin'>Peeru Travel Guide</p>
            <p className='font-thin'>Bali Travel Guide</p>
          </div>
          <div>
            <h3 className='font-bold'>About Us</h3>
            <p className='font-thin'>Our story.</p>
            <p className='font-thin'>Work with us.</p>
          </div>
          <div>
            <h3 className='font-bold'>Contact Us</h3>
            <p className='font-thin'>Our story.</p>
            <p className='font-thin'>Work with us.</p>
          </div>
        </div>
      </div>

      {/* Box component positioned half above the 'right' div */}
      <div className="absolute -top-20 w-[1030px] left-1/2 transform -translate-x-1/2 px-3 mt-5 rounded-xl mb-4 pt-3 flex justify-between bg-[#CDEAE1] shadow-lg">
        <div>
          <h2 className="text-[#112211] text-4xl font-bold font-sans">Subscribe</h2>
          <h2 className="text-[#112211] text-4xl font-bold font-sans">Newsletter</h2>
          <h5 className="mt-2">The Travel</h5>
          <p className="font-thin text-sm">
            Get inspired! Receive travel discounts, tips and behind-the-scenes stories.
          </p>
          <div className="flex mt-3 space-x-2">
            <div className="w-80">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Your Email Address"
              />
            </div>
            <button className="bg-black text-gray-300 px-4 py-2 rounded-md">Subscribe</button>
          </div>
        </div>
        <div>
          <img
            src={box}
            alt="Sample 1"
            className="w-[350px] h-[200px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
