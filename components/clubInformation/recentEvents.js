import PhotoCard from "./photoCard";
import ShowAllBtn from "./showAllBtn";
import EventCard from "../eventCard";
import { MdKeyboardArrowRight } from "react-icons/md";
const RecentEvents = (props) => {
  return (
    <div>
      <div className='flex items-center mb-5'>
        <h1 className='text-xl'>Recent Events</h1>
        <MdKeyboardArrowRight className=' text-xl mt-0.5' />
        <ShowAllBtn />
      </div>
      <div className=''>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default RecentEvents;
