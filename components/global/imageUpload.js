import { useRef, useState } from "react";
import Cropper from "react-easy-crop";
import SlideBar from "./slideBar";
import { generateDownload } from "../utils/cropImage";

function imageUpload() {
  const inputRef = useRef();
  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const triggerFileSelect = () => {
    inputRef.current.click();
  };

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    console.log(croppedAreaPercentage, croppedAreaPixels);
    setCroppedArea(croppedAreaPixels);
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

  const onDownload = () => {
    generateDownload(image, croppedArea);
  };
  return (
    <div>
      {image ? (
        <div>
          <div className=' relative'>
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
        </div>
      ) : null}

      <div>
        <input
          className='hidden'
          type='file'
          accept='image/*'
          ref={inputRef}
          onChange={onSelectFile}
        />
        <button
          className='px-2 py-1 bg-gray-300 rounded m-2 shadow'
          onClick={triggerFileSelect}
        >
          Choose
        </button>
        <button
          disabled
          className='px-2 py-1 bg-gray-300 rounded m-2 shadow'
          onClick={onDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default imageUpload;
