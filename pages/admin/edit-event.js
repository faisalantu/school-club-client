import EventCard from "../../components/global/eventCard";
import ContainerWrapper from "../../components/containerWrapper";

const EditEvents = (props) => {
  return (
    <>
      <ContainerWrapper>
        <div className='px-5'>
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
            edit={true}
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
            edit={true}
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
            edit={true}
          />
        </div>
      </ContainerWrapper>
    </>
  );
};

export default EditEvents;
