import NonExtendedLink from "../navBar/nonExtendedLink";

//import icons
import { HiHome } from "react-icons/hi";
import { GrShieldSecurity } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl'>
        <NonExtendedLink icon={<HiHome />} name='Home' route='/' />
        <NonExtendedLink
          icon={<RiAccountCircleFill />}
          name='Account'
          route='/setting'
        />
        <NonExtendedLink
          icon={<GrShieldSecurity />}
          name='Change password'
          route='/setting/update-password'
        />
      </div>
    </>
  );
}
