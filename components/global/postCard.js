import CommentInfoBtn from "../postComponent/commentInfoBtn";
import UserInfoAndDate from "./userInfoAndDate";
import Tags from "./tags";
import Reaction from "../postComponent/reaction";
const Container = ({edit,name,role,imgUrl,date,title,tags}) => {
  return (
    <>
      <div className='bg-white border-gray-600 p-5 rounded-md shadow-sm my-5'>
        <UserInfoAndDate
          name = {name}
          role={role}
          imgUrl={imgUrl}
          date={date}
        />
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div className='ml-4'>
            <h1 className=' text-xl font-medium'>
              {title?title:'invalid title'}
            </h1>
            <Tags tags={tags}/>
            <div className='flex items-center '>
              <Reaction />
              <CommentInfoBtn />
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

export default Container;
