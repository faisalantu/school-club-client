import ShowAllBtn from "./showAllBtn";
import EventCard from "../global/eventCard";
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
        <EventCard
          name='Faisal Antu'
          role='CSE Club President'
          date='3 Feb 2021'
          title='10 Trending projects on GitHub for web developer'
          location='Dhaka,Bangladesh'
          fee='100'
          tickets='45'
          time='4:00pm - 5:30pm'
          email='hello@faisalantu.com'
          phone='880 1776XXXXXX'
          edit={false}
        />
        <EventCard
          name='Faisal Antu'
          role='CSE Club President'
          date='3 Feb 2021'
          title='10 Trending projects on GitHub for web developer'
          location='Dhaka,Bangladesh'
          fee='100'
          tickets='45'
          time='4:00pm - 5:30pm'
          email='hello@faisalantu.com'
          phone='880 1776XXXXXX'
          edit={false}
        />
        <EventCard
          name='Faisal Antu'
          role='CSE Club President'
          date='3 Feb 2021'
          title='10 Trending projects on GitHub for web developer'
          location='Dhaka,Bangladesh'
          fee='100'
          tickets='45'
          time='4:00pm - 5:30pm'
          email='hello@faisalantu.com'
          phone='880 1776XXXXXX'
          edit={false}
        />
      </div>
    </div>
  );
};

export default RecentEvents;
