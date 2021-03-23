import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { GiTicket } from "react-icons/gi";
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
            Git commit message convention that you can follow!
            </h1>
            <div className='flex items-center ml-4'>
              <span className='mr-3 text-gray-500'>#git</span>
              <span className='mr-3 text-gray-500'>#github</span>
              <span className='mr-3 text-gray-500'>#nodJs</span>
              <span className='mr-3 text-gray-500'>#nextJs</span>
            </div>
            <div className='flex items-center ml-4'>
              <AiOutlineHeart className=' text-sm' />
              <p className='ml-1'>1 Reaction</p>
              <BiCommentDetail className='ml-5 text-sm' />
              <p className='ml-1'>Add Comments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
