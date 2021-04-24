import React, { useState, useRef, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsTriangleFill } from "react-icons/bs";
import Link from "next/link";
import useOnClickOutside from "use-onclickoutside";
import { RiChatSmile3Line } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";

export default function topNavAddBtn() {
  const addBtn = useRef(null);
  const [addBtnToggle, setAddBtnToggle] = useState(false);

  useOnClickOutside(addBtn, function () {
    setAddBtnToggle(false);
  });

  return (
    <div
      ref={addBtn}
      onClick={function () {
        setAddBtnToggle(!addBtnToggle);
      }}
      className='relative cursor-pointer'
    >
      <IoMdAdd className='text-gray-100 text-md flex-auto mx-1' />
      <BsTriangleFill
        className={`${
          addBtnToggle ? "" : "hidden"
        } absolute right-1 text-white `}
      />
      <div
        className={` ${
          addBtnToggle ? "" : "hidden"
        } absolute right-0 mt-2 origin-top-right rounded-md shadow-lg z-30`}
      >
        <div className='px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700'>
          <Link href='/discussions/add-discussion'>
            <a
              className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
              href='#'
            >
              <RiChatSmile3Line className='p-0 mr-1.5 text-base' />
              <span className='text-sm'>Add Discussion</span>
            </a>
          </Link>
          <Link href='/issues/add-issue'>
            <a
              className='flex justify-start px-4 py-2 mt-2 font-semibold bg-transparent rounded-lg hover:bg-gray-200'
              href='#'
            >
              <MdReportProblem className='p-0 mr-1.5 text-base' />
              <span className='text-sm'>Add Issue</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
