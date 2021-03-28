import { useState } from "react";
import ExtendedLink from "../navBar/extendedLink";
import SubSidebarLink from "../navBar/subSidebarLink";

//import icons
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill, BsFileText } from "react-icons/bs";
import { MdKeyboardArrowRight, MdEventNote, MdEdit } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl select-none'>
        <div className='class pb-2.5 cursor-pointer flex items-center'>
          <HiHome className='text-xl p-0 m-0 mr-2' />
          <span>Home</span>
        </div>
        {/* Club events sidebar*/}
        <ExtendedLink name='Club Members' icon={<BsFillPersonFill/>} iconClass='sm:text-md'>
          <SubSidebarLink name='Edit Members' icon={<MdEdit />} route='/admin' />
        </ExtendedLink>

        {/* Club events sidebar*/}
        <ExtendedLink name='Club Events' icon={<MdEventNote/>} iconClass='sm:text-md'>
          <SubSidebarLink name='Add Events' icon={<IoAddCircle  />} route='/posts/post'/>
          <SubSidebarLink name='Edit Events' icon={<MdEdit />} route='' />
        </ExtendedLink>

        {/* Club events sidebar*/}
        <ExtendedLink name='Club Posts' icon={<BsFileText/>} iconClass='sm:text-md'>
          <SubSidebarLink name='Add Posts' icon={<IoAddCircle />} route='' />
          <SubSidebarLink name='Edit Posts' icon={<MdEdit />} route=''/>
        </ExtendedLink>
      </div>
    </>
  );
}
