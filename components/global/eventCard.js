import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { BiTimeFive, BiMailSend, BiPhone } from "react-icons/bi";
const EventCard = ({
  name,
  role,
  date,
  title,
  location,
  fee,
  tickets,
  time,
  email,
  phone,
  edit,
}) => {
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
              {name && name} <span>| {role && role}</span>
            </h1>
            <span className=' text-xs font-normal p-0 ml-4'>
              {date && date}
            </span>
          </div>
        </div>
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div>
            <h1 className='ml-4 text-xl font-medium'>{title && title}</h1>
            <div className='flex items-center ml-4'>
              <ImLocation className=' text-sm' />
              <h3 className='ml-1'>{location && location}</h3>
            </div>
            <div className='flex items-center ml-4'>
              <RiMoneyDollarCircleFill className=' text-sm' />
              <p className='ml-1'>Fee {fee && fee} taka</p>
              <GiTicket className='ml-5 text-sm' />
              <p className='ml-1'>{tickets && tickets} tickets left</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiTimeFive className=' text-sm' />
              <p className='ml-1'>Time: {time && time}</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiMailSend className=' text-sm' />
              <p className='ml-1'>{email && email}</p>
            </div>
            <div className='flex items-center ml-4'>
              <BiPhone className=' text-sm' />
              <p className='ml-1'>{phone && phone}</p>
            </div>
          </div>
        </div>
        {edit ? (
          <div className='flex items-center justify-end my-2'>
            <button className=' border-2 border-yellow-500 px-3 py-0.5 rounded mx-2'>
              Edit
            </button>
            <button className=' border-2 border-red-500 px-3 py-0.5 rounded mx-2'>
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EventCard;
