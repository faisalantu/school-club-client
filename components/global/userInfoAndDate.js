import Image from "next/image";
import dayjs from "dayjs";

function userInfoAndDate({ name, role, imgUrl, date }) {
  return (
    <>
      <div className='flex items-center'>
        <div className='h-11 w-11 overflow-hidden relative'>
          <Image
            className='rounded-full'
            src={`${imgUrl ? imgUrl : "/user.png"}`}
            alt='Picture of the author'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className=' leading-none'>
          <h1 className='ml-4 text-lg font-medium'>
            {name ? name : "invalid name"}{" "}
            <span>{role ? "| " + role : ""}</span>
          </h1>
          <span className=' text-xs font-normal p-0 ml-4'>
            {date ? dayjs(date).format('DD-MM-YYYY') : "err"}
          </span>
        </div>
      </div>
    </>
  );
}

export default userInfoAndDate;
