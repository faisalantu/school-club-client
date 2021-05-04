import { useRef, useState } from "react";
import Cropper from "react-easy-crop";
import SlideBar from "../global/slideBar";
import { AiFillCamera } from "react-icons/ai";
import { MdDone, MdEdit } from "react-icons/md";
import getCroppedImg from "../utils/cropImage";
import { dataURLtoFile } from "../utils/dataURLtoFile";
import Image from "next/image";

function ImageUpload({onImageChange}) {
  const inputRef = useRef();
  const [image, setImage] = useState(null);
  const [croppedImageDataURL, setCroppedImageDataURL] = useState(null);
  const [croppedImageFile, setCroppedImageFile] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [editMode, setEditMode] = useState(false);

  const triggerFileSelect = () => {
    inputRef.current.click();
  };

  const showCroppedImage = async (e) => {
    e.preventDefault();
    try {
      const tempCroppedImage = await getCroppedImg(image, croppedArea);

      const tempImgDataUrl = tempCroppedImage.toDataURL("image/jpeg");
      setCroppedImageDataURL(tempImgDataUrl);
      const convertedUrlToFile = dataURLtoFile(
        tempImgDataUrl,
        "profile-img.jpeg"
      );
      console.log("donee", { convertedUrlToFile });
      setCroppedImageFile(convertedUrlToFile);
      setEditMode(false);
    } catch (e) {
      //show Error
      //console.error(e);
    }
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    //console.log(croppedAreaPercentage, croppedAreaPixels);
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
        if (onImageChange) {
          onImageChange(reader.result);
        }
      });
    }
  };

  return (
    <div>
      {image && editMode ? (
        <div>
          <div className=' mx-auto relative h-56 w-56'>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className='w-2/5 mx-auto m-3'>
            <SlideBar
              min={1}
              max={3}
              value={zoom}
              cbValue={setZoom}
              step={0.01}
            />
          </div>
          <div className='flex justify-center m-4'>
            <button
              className=' mx-2 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-yellow-500 hover:shadow'
              onClick={triggerFileSelect}
            >
              <MdEdit />
            </button>
            <button
              className=' mx-2 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-green-700 hover:shadow'
              onClick={showCroppedImage}
            >
              <MdDone />
            </button>
          </div>
        </div>
      ) : (
        <div className='my-5'>
          <div className='h-56 w-56 mx-auto bg-gray-300 rounded-full relative'>
            <div className='h-56 w-56 rounded-full overflow-hidden'>
              {croppedImageDataURL ? (
                <img src={croppedImageDataURL} alt='image' />
              ) : (
                <Image
                  className='rounded-full'
                  src={"/user.png"}
                  alt='Picture of the author'
                  layout='fill'
                  objectFit='cover'
                />
              )}
            </div>

            <div
              className='flex items-center justify-center absolute bottom-0 right-7 h-10 w-10 rounded-full bg-white cursor-pointer hover:shadow text-xl'
              onClick={(e) => {
                e.preventDefault();
                triggerFileSelect();
                setEditMode(true);
              }}
            >
              <AiFillCamera />
            </div>
          </div>
        </div>
      )}

      <input
        className='hidden'
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={onSelectFile}
      />
    </div>
  );
}

export default ImageUpload;
