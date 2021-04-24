import ExtendedLink from "./extendedLink";
import NonExtendedLink from "./nonExtendedLink";
import SubSidebarLink from "./subSidebarLink";

//import icons
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill, BsFileText } from "react-icons/bs";
import { MdEventNote, MdReportProblem } from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl select-none'>
        <NonExtendedLink icon={<HiHome />} name='Home' route='/' />
        {/* Club Information sidebar*/}
        <NonExtendedLink
          icon={<BsFillPersonFill />}
          name='Club Information'
          route='/clubinfo'
        />

        {/* Club events sidebar*/}
        <ExtendedLink
          name='Events'
          icon={<MdEventNote />}
          iconClass='sm:text-md'
        >
          <SubSidebarLink name='Club Events' route='/events' />
          <SubSidebarLink name='Charity Events' route='/events' />
        </ExtendedLink>

        {/* Club Posts sidebar*/}
        <NonExtendedLink
          icon={<BsFileText />}
          name='Posts'
          route='/posts'
        />

        
        <NonExtendedLink
          icon={<RiChatSmile3Line />}
          name='Club Discussions'
          route='/discussions'
        />
        <NonExtendedLink
          icon={<MdReportProblem />}
          name='Issue Forum'
          route='/issues'
        />
      </div>
    </>
  );
}
