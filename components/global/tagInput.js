import react, { useState } from "react";
import { BiX } from "react-icons/bi";
function skillInput(props) {
  const [tags, setTags] = useState(["nodeJS", "NextJS"]);

  const addTags = (e) => {
    if (e.key === "Enter" && e.target.value !== '') {
      setTags([...tags, e.target.value]);
      props.getTags([...tags, e.target.value]);
      e.target.value = ''
    }
  };

  const removeTag = (iToRemove)=>{
    setTags(tags.filter((_,i)=>i !== iToRemove))
    props.getTags(tags);
  }

  return (
    <div className='mt-4 border-2 rounded border-gray-300 flex items-center flex-wrap'>
      <div className='flex flex-wrap px-2'>
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className='px-2 py-1 flex items-center rounded-md bg-gray-400 mr-2 my-1'
            >
              <span>{tag}</span>
              <div onClick={()=>removeTag(index)} className='bg-gray-200 rounded-full ml-1'>
                <BiX />
              </div>
            </div>
          );
        })}
      </div>
      <input
        onKeyUp={e => (e.key === "Enter" ? addTags(e) : null)}
        className='py-3 outline-none bg-transparent'
        type='text'
        placeholder={" press enter to add tag"}
      />
    </div>
  );
}

export default skillInput;
