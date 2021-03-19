import Link from "next/link";
import { fromJSON } from "postcss";
import { useState } from "react";

//import icons
import { HiHome } from "react-icons/hi";
import { BsFillInfoSquareFill, BsFileText } from "react-icons/bs";
import { MdKeyboardArrowRight, MdEventNote } from "react-icons/md";

export default function SideBar() {
  const [infoVisibility, setInfoVisibility] = useState(true);
  const [clubPostExpand, setClubPostExpand] = useState(true);
  const [eventVisibility, setEventVisibility] = useState(true);

  return (
    <>
      <div className=' w-60 pl-14 pt-2.5'>
        <div className='class pb-2.5 cursor-pointer flex items-center'>
          <HiHome className='text-xl p-0 m-0 mr-2' />
          <span>Home</span>
        </div>
        <div
          className='class pb-2.5 cursor-pointer '
          onClick={function () {
            setInfoVisibility(!infoVisibility);
          }}
        >
          <div className='flex'>
            <div className='flex items-center'>
              <BsFillInfoSquareFill className='p-0 ml-0.5 text-md mr-2' />
              <span>Club information</span>
            </div>
            {infoVisibility ? (
              <MdKeyboardArrowRight className=' inline-block mt-0.5 text-xl' />
            ) : (
              <MdKeyboardArrowRight className=' inline-block mt-0.5 text-xl transform rotate-90' />
            )}
          </div>
          <div
            className={`border-l-2 border-black ml-2 pl-10 mt-2 py-0 mb-0 ${
              infoVisibility ? "hidden" : " "
            }`}
          >
            <div>CSE</div>
            <div>EEE</div>
            <div>TXT</div>
            <div>Language</div>
          </div>
        </div>
        {/* Club events sidebar*/}
        <div
          className='class pb-2.5 cursor-pointer '
          onClick={function () {
            setEventVisibility(!eventVisibility);
          }}
        >
          <div className='flex'>
            <div className='flex items-center'>
              <MdEventNote className='p-0 m-0 text-xl mr-2' />
              <span>Club Events</span>
            </div>
            {infoVisibility ? (
              <MdKeyboardArrowRight className=' inline-block mt-0.5 text-xl' />
            ) : (
              <MdKeyboardArrowRight className=' inline-block mt-0.5 text-xl transform rotate-90' />
            )}
          </div>
          <div
            className={`border-l-2 border-black ml-2 pl-10 mt-2 py-0 mb-0 ${
              eventVisibility ? "hidden" : " "
            }`}
          >
            <div>CSE</div>
            <div>EEE</div>
            <div>TXT</div>
            <div>Language</div>
          </div>
        </div>
        {/* Club Post Sidebar */}
        <div
          className='class pb-2.5 cursor-pointer '
          onClick={function () {
            setClubPostExpand(!clubPostExpand);
          }}
        >
          <div className='flex'>
            <div className='flex items-center'>
              <BsFileText className='p-0 m-0 text-xl mr-2' />
              <span>Club Posts</span>
            </div>
            {infoVisibility ? (
              <MdKeyboardArrowRight className=' inline-block mt-0.5 text-xl' />
            ) : (
              <MdKeyboardArrowRight className=' inline-block mt-0.5 text-xl transform rotate-90' />
            )}
          </div>
          <div
            className={`border-l-2 border-black ml-2 pl-10 mt-2 py-0 mb-0 ${
              clubPostExpand ? "hidden" : " "
            }`}
          >
            <div>CSE</div>
            <div>EEE</div>
            <div>TXT</div>
            <div>Language</div>
          </div>
        </div>
      </div>
    </>
  );
}
