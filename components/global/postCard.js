import CommentInfoBtn from "./commentInfoBtn";
import UserInfoAndDate from "./userInfoAndDate";
import Tags from "./tags";
import Reaction from "./reaction";
const Container = () => {
  return (
    <>
      <div className='bg-white border-gray-600 p-5 rounded-md shadow-sm my-5'>
        <UserInfoAndDate
          name='Faisal Antu'
          role='CSE Club President'
          imgUrl='/portrait-1.jpg'
          date='3 Feb 2021'
        />
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div className='ml-4'>
            <h1 className=' text-xl font-medium'>
              Git commit message convention that you can follow!
            </h1>
            <Tags />
            <div className='flex items-center '>
              <Reaction />
              <CommentInfoBtn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
