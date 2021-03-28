import ExtendedLink from "../navBar/extendedLink";
import SubSidebarLink from "../navBar/subSidebarLink";

//import icons
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill, BsFileText } from "react-icons/bs";
import {  MdEventNote, MdEdit } from "react-icons/md";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl select-none'>
        <div className='class pb-2.5 cursor-pointer flex items-center'>
          <HiHome className='text-xl p-0 m-0 mr-2' />
          <span>Home</span>
        </div>
        {/* Club events sidebar*/}
        <ExtendedLink
          name='Club Members'
          icon={<BsFillPersonFill />}
          iconClass='sm:text-md'
        >
          <SubSidebarLink name='CSE' route='/admin' />
          <SubSidebarLink name='EEE' route='/admin' />
          <SubSidebarLink name='Textile' route='/admin' />
          <SubSidebarLink name='English' route='/admin' />
        </ExtendedLink>

        {/* Club events sidebar*/}
        <ExtendedLink
          name='Club Events'
          icon={<MdEventNote />}
          iconClass='sm:text-md'
        >
          <SubSidebarLink name='CSE' route='/admin' />
          <SubSidebarLink name='EEE' route='/admin' />
          <SubSidebarLink name='Textile' route='/admin' />
          <SubSidebarLink name='English' route='/admin' />
        </ExtendedLink>

        {/* Club events sidebar*/}
        <ExtendedLink
          name='Club Posts'
          icon={<BsFileText />}
          iconClass='sm:text-md'
        >
          <SubSidebarLink name='CSE' route='/admin' />
          <SubSidebarLink name='EEE' route='/admin' />
          <SubSidebarLink name='Textile' route='/admin' />
          <SubSidebarLink name='English' route='/admin' />
        </ExtendedLink>
      </div>
    </>
  );
}
