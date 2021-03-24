import PhotoCard from "./photoCard";
import ShowAllBtn from "./showAllBtn";
import PostCard from "../postPageComponent/postCard";
import { MdKeyboardArrowRight } from "react-icons/md";
const RecentPosts = (props) => {
  return (
    <div>
      <div className='flex items-center mb-5'>
        <h1 className='text-xl'>Recent Posts</h1>
        <MdKeyboardArrowRight className=' text-xl mt-0.5' />
        <ShowAllBtn />
      </div>
      <div className=''>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default RecentPosts;
