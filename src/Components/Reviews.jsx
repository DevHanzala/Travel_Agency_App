import Rating from '@mui/material/Rating';
import GoogleIcon from '@mui/icons-material/Google';
import mountain from '../images/Rectangle 36.jpg'
import stars from '../images/Rectangle 36 (1).jpg'
import cloud from '../images/Rectangle 36 (2).jpg'


export function Reviews() {
  return (
    <div className="w-[1030px] mx-auto  mt-6 md:mb-24">
      <div className='flex justify-between items-center'>
        <div>
          <h4 className="font-bold text-2xl px-1">Reviews</h4>
          <p className="mt-2 font-thin px-1">What people say about Globe facilities</p>
        </div>
        <p className='border-gray-200 border-2 px-2 cursor-pointer'>See All</p>

      </div>

      <div className="flex justify-center space-x-6 my-8">
        {/* First Card */}
        <div className="w-[330px] rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          style={{
            boxShadow: '5px 5px 15px 0px rgba(34, 139, 34, 0.5)',
            borderBottom: '15px solid #CDEAE1',
            borderRight: '15px solid #CDEAE1',
            borderRadius: '30px'
          }}
        >
          <div className="p-4">
            <p className="text-lg font-bold">"A real sense of community, nurtured"</p>
            <p className="text-sm font-thin text-gray-600 mt-3">Really appreciate the help and support from the staff during these
              tough times. Shotut to Katie for..</p>
            <p className="ml-52 text-sm ">view more</p>
            <p className='mt-2'><Rating name="size-medium" defaultValue={5} /></p>
            <p className='font-bold'>Oiga</p>
            <p className='font-thin text-sm'>Weave studios Kai-Tak</p>
            <p className='mt-2 font-bold'><span className='text-red-500'><GoogleIcon /></span> Google</p>
          </div>
          <div className="mt-auto px-4 py-3">
            <img
              src={mountain}
              alt="Sample 1"
              className="w-[377px] h-[200px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="w-[330px] rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          style={{
            boxShadow: '5px 5px 15px 0px rgba(34, 139, 34, 0.5)',
            borderBottom: '15px solid #CDEAE1',
            borderRight: '15px solid #CDEAE1',
            borderRadius: '30px'
          }}
        >
          <div className="p-4">
            <p className="text-lg font-bold">"The Facilities are superb. Clean, slick, bright"</p>
            <p className="text-sm font-thin text-gray-600 mt-3">Really appreciate the elp and support from the staff during these tough times. Shotut to Katie for..</p>
            <p className="ml-52 text-sm mt-1">view more</p>
            <p className='mt-2'><Rating name="size-medium" defaultValue={5} /></p>
            <p className='font-bold'>Thomas</p>
            <p className='font-thin text-sm'>Weave studios Olympics</p>
            <p className='mt-2 font-bold'><span className='text-red-500'><GoogleIcon /></span> Google</p>
          </div>
          <div className="mt-auto px-4 py-3">
            <img
              src={stars}
              alt="Sample 1"
              className="w-[377px] h-[200px] object-cover rounded-md"
            />
          </div>
        </div>
        {/* Third Card */}
        <div className="w-[330px] rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          style={{
            boxShadow: '5px 5px 15px 0px rgba(34, 139, 34, 0.5)',
            borderBottom: '15px solid #CDEAE1',
            borderRight: '15px solid #CDEAE1',
            borderRadius: '30px'
          }}
        >
          <div className="p-4">
            <p className="text-lg font-bold">"A real sense of community, nurtured"</p>
            <p className="text-sm font-thin text-gray-600 mt-3">Really appreciate the elp and support from the staff during these tough times. Shotut to Katie for..</p>
            <p className="ml-52 text-sm mt-1">view more</p>
            <p className='mt-2'><Rating name="size-medium" defaultValue={5} /></p>
            <p className='font-bold'>Eliot</p>
            <p className='font-thin text-sm'>Weave studios Kai-Tak</p>
            <p className='mt-2 font-bold'><span className='text-red-500'><GoogleIcon /></span> Google</p>
          </div>
          <div className="mt-auto px-4 py-3">
            <img
              src={cloud}
              alt="Sample 1"
              className="w-[377px] h-[200px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}