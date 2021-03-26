import { AiOutlineHeart } from "react-icons/ai";
function reaction({ reactions,className }) {
  return (
    <div className={`${className?className:""}`}>
      <div className='flex items-center'>
        <AiOutlineHeart className=' text-sm' />
        <p className='ml-1'>{reactions ? reactions + " Reactions" : "React"}</p>
      </div>
    </div>
  );
}

export default reaction;
