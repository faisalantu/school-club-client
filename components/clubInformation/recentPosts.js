import ShowAllBtn from "./showAllBtn";
import PostCard from "../global/postCard";
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
      <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
      <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
      <PostCard imgUrl='/portrait-1.jpg' name='Faisal Antu' date='3-apr-2021' title='Enhance your code reading experience on GitHub' />
      </div>
    </div>
  );
};

export default RecentPosts;
