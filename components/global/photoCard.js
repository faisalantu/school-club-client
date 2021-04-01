import Image from "next/image";
import { ImUser } from 'react-icons/im';
const PhotoCard = ({name ,rank , imgUrl }) => {
  return (
    <>
      <div className='bg-white rounded-md w-44 h-56 relative overflow-hidden cursor-pointer'>
        <div className=' text-center z-30 absolute bottom-0 left-0 right-0 mb-3 px-3 leading-3'>
          <h1 className='font-medium text-lg'>{name && name }</h1>
          <span className='text-sm'> {rank && rank }</span>
        </div>
        <Image src={imgUrl ? imgUrl:'/user.png' } layout='fill' objectFit="cover" ></Image>

        <div className='h-2/5 w-auto absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white to-transparent op z-20'></div>
      </div>
    </>
  );
};

export default PhotoCard;
