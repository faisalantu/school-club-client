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
        <NonExtendedLink name='My Posts' icon={<BsFileText/>} route='/dashboard/user-posts'/>
        
      </div>
    </>
  );
}
