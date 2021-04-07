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
          <SubSidebarLink name='CSE' route='/club' />
          <SubSidebarLink name='EEE' route='/club' />
          <SubSidebarLink name='Textile' route='/club' />
          <SubSidebarLink name='English' route='/club' />
        </ExtendedLink>

        {/* Club events sidebar*/}
        <ExtendedLink
          name='Club Events'
          icon={<MdEventNote />}
          iconClass='sm:text-md'
        >
          <SubSidebarLink name='CSE' route='/events' />
          <SubSidebarLink name='EEE' route='/events' />
          <SubSidebarLink name='Textile' route='/events' />
          <SubSidebarLink name='English' route='/events' />
        </ExtendedLink>

        {/* Club events sidebar*/}
        <ExtendedLink
          name='Club Posts'
          icon={<BsFileText />}
          iconClass='sm:text-md'
        >
          <SubSidebarLink name='CSE' route='/posts' />
          <SubSidebarLink name='EEE' route='/posts' />
          <SubSidebarLink name='Textile' route='/posts' />
          <SubSidebarLink name='English' route='/posts' />
        </ExtendedLink>
      </div>
    </>
  );
}
