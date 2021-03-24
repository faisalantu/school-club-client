import PhotoCard from "./photoCard";
import ShowAllBtn from "./showAllBtn";
import { MdKeyboardArrowRight } from "react-icons/md";
const ClubMembers = (props) => {
  return (
    <div>
      <div className='flex items-center mb-5'>
        <h1 className='text-xl'>Club Members</h1>
        <MdKeyboardArrowRight className=' text-xl mt-0.5' />
        <ShowAllBtn />
      </div>
      <div className='flex flex-wrap gap-5'>
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </div>
    </div>
  );
};

export default ClubMembers;
