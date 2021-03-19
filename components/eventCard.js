import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { BiTimeFive,BiMailSend,BiPhone } from "react-icons/bi";
const Container = (props) => {
  return (
    <>
      <div className='bg-white border-gray-600 p-5 rounded-md shadow-sm my-5'>
        <div className='flex items-center'>
          <Image
            className='rounded-full'
            src='/portrait-1.jpg'
            alt='Picture of the author'
            width={45}
            height={45}
          />
          <div className=' leading-none'>
            <h1 className='ml-4 text-lg font-medium'>
              Faisal Antu <span>| CSE Club President</span>
            </h1>
            <span className=' text-xs font-normal p-0 ml-4'>3 Feb 2021</span>
          </div>
        </div>
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div>
            <h1 className='ml-4 text-xl font-medium'>
              10 Trending projects on GitHub for web developer
            </h1>
            <div className='flex items-center ml-4'>
              <ImLocation className=' text-sm' />
              <h3 className='ml-1'>Location: Green University Main Campus</h3>
            </div>
            <div className='flex items-center ml-4'>
              <RiMoneyDollarCircleFill className=' text-sm' />
              <p className='ml-1'>Fee: 100 taka</p>
              <GiTicket className='ml-5 text-sm' />
              <p className='ml-1'>45 tickets left</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiTimeFive className=' text-sm'/>
              <p className='ml-1'>Time: 5:12 PM - 6:30 PM</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiMailSend className=' text-sm'/>
              <p className='ml-1'>hello@faisalantu.com</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiPhone className=' text-sm'/>
              <p className='ml-1'>+880170000000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
