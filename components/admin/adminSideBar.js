import ExtendedLink from "../navBar/extendedLink";
import SubSidebarLink from "../navBar/subSidebarLink";
import NonExtendedLink from "../navBar/nonExtendedLink";
//import icons
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill, BsFileText } from "react-icons/bs";
import { MdKeyboardArrowRight, MdEventNote, MdEdit } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl select-none'>
        <NonExtendedLink name='Home' icon={<HiHome/>} route='/'/>
        
        <ExtendedLink name='Club Members' icon={<BsFillPersonFill/>} iconClass='sm:text-md'>
          <SubSidebarLink name='Edit Member' icon={<MdEdit />} route='/admin/edit-member' />
        </ExtendedLink>

        <ExtendedLink name='Club Events' icon={<MdEventNote/>} iconClass='sm:text-md'>
          <SubSidebarLink name='Add Event' icon={<IoAddCircle  />} route='/admin/add-event'/>
          <SubSidebarLink name='Edit Event' icon={<MdEdit />} route='/admin/edit-event' />
        </ExtendedLink>

        <ExtendedLink name='Club Posts' icon={<BsFileText/>} iconClass='sm:text-md'>
          <SubSidebarLink name='Add Post' icon={<IoAddCircle />} route='/admin/add-post' />
          <SubSidebarLink name='Edit Post' icon={<MdEdit />} route='/admin/edit-post'/>
        </ExtendedLink>
      </div>
    </>
  );
}
