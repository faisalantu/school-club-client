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
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' rank='Club President'/>
        <PhotoCard imgUrl='/portrait-1.jpg' name='Faisal Antu' />
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' rank='Club Member'/>
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' />
        <PhotoCard imgUrl='/portrait-1.jpg' name='Faisal Antu' rank='Club President'/>
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' rank='Club President'/>
        <PhotoCard imgUrl='/portrait-1.jpg' name='Faisal Antu' rank='Club Member'/>
        <PhotoCard imgUrl='/portrait-2.jpeg' name='Faisal Antu' rank='Club President'/>
      </div>
    </div>
  );
};

export default ClubMembers;
