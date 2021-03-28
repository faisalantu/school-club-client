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
