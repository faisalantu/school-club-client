import Image from "next/image";
import ReactTooltip from "react-tooltip";

function roundedUserList({name,imgUrl}) {
  return (
    <div className='flex gap-3 '>
    <div className=' h-14 w-14  overflow-hidden relative cursor-pointer'>
      <Image
        data-tip={name?name:'Invalid Name'}
        data-background-color="#81b29a"
        data-delay-show='300'
        className='rounded-full shadow-sm border border-gray-400'
        src={imgUrl?imgUrl:'/user.png'}
        alt='Picture of the author'
        layout='fill'
        objectFit='cover'
      />
    </div>
      <ReactTooltip />
    </div>
  );
}

export default roundedUserList;
