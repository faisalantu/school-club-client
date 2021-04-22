import { useRef, useState } from "react";
import { FaHandPointDown } from "react-icons/fa";
export default function imageInputBox() {
  const inputRef = useRef();
  const [image, setImage] = useState(null);
  const triggerFileSelect = () => {
    inputRef.current.click();
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };
  return (
    <div>
      <input
        hidden
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={onSelectFile}
      />
      {image ? (
        <span>
          click <FaHandPointDown className='inline-block' /> indide the box to
          change image
        </span>
      ) : null}
      <div
        className='rounded bg-gray-200 max-h-96 w-full border-2 border-dashed border-gray-400 cursor-pointer overflow-hidden'
        onClick={triggerFileSelect}
      >
        {!image ? (
          <div className='h-24 flex items-center justify-center'>
            <span className=' text-gray-600 text-lg select-none'>
              please click to choose an image
            </span>
          </div>
        ) : (
          <img className='h-96 mx-auto' src={image} alt='image' />
        )}
      </div>
    </div>
  );
}
