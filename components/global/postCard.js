import Link from "next/link";
import CommentInfoBtn from "../postComponent/commentInfoBtn";
import UserInfoAndDate from "./userInfoAndDate";
import Tags from "./tags";
import Reaction from "../postComponent/reaction";
const Container = ({ edit, name, role, imgUrl, date, title, tags }) => {
  return (
    <>
      <div className='bg-white border-gray-600 p-5 rounded-md shadow-sm my-5'>
        <UserInfoAndDate name={name} role={role} imgUrl={imgUrl} date={date} />
        <div className='flex mt-3 leading-relaxed'>
          <div style={{ height: "auto", width: "45px" }}></div>
          <div className='ml-4'>
            <h1 className=' text-xl font-medium'>
              {title ? title : "invalid title"}
            </h1>
            <Tags tags={tags} />
            <div className='flex items-center '>
              <Reaction />
              <CommentInfoBtn />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end my-2'>
          {edit ? (
            <>
              <button className=' border bg-yellow-200 hover:bg-yellow-300 px-3 py-0.5 rounded mx-2'>
                Edit
              </button>
              <button className=' border bg-red-300 hover:bg-red-400 px-3 py-0.5 rounded mx-2'>
                Delete
              </button>
            </>
          ) : (
            ""
          )}

          <Link href='/posts/cse/123'>
            <a className=' border bg-gray-200 hover:bg-gray-300 px-2 py-0.5 rounded mx-2 flex items-center'>
              <span className='ml-1'>Read more</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Container;
