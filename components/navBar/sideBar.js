import ExtendedLink from "./extendedLink";
import NonExtendedLink from "./nonExtendedLink";
import SubSidebarLink from "./subSidebarLink";

//import icons
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill, BsFileText } from "react-icons/bs";
import {  MdEventNote, MdEdit } from "react-icons/md";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl select-none'>
        <NonExtendedLink icon={<HiHome/>} name='Home' route='/'/>
        {/* Club events sidebar*/}
        <ExtendedLink
          name='Club Information'
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
