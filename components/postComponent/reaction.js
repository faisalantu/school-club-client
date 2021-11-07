import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "../../axios";
function reaction({ reactions, active, postId, apiUrl }) {
  const [like, setLike] = useState(active);
  const likePost = async () => {
    try {
      const res = await axios.post(apiUrl);
      if (res) {
        setLike(!like);
        
      }
    } catch (err) {
      toast.error("Something went wrong please try again");
    }
  };
  return (
    <div className='select-none'>
      <div className='flex items-center'>
        <div
          onClick={() => {
            likePost();
          }}
          className=' cursor-pointer'
        >
          {like ? (
            <AiFillHeart className='text-red-600' />
          ) : (
            <AiOutlineHeart className='' />
          )}
        </div>
        <p className='ml-1'>{reactions ? reactions : "React"}</p>
      </div>
    </div>
  );
}

export default reaction;
