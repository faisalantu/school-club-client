import NonExtendedLink from "../navBar/nonExtendedLink";

//import icons
import { HiHome } from "react-icons/hi";
import { Si1Password } from "react-icons/si";
import { RiAccountBoxLine } from "react-icons/ri";

export default function SideBar() {
  return (
    <>
      <div className='pt-2.5 px-14 lg:text-xl'>
        <NonExtendedLink icon={<HiHome />} name='Home' route='/' />
        <NonExtendedLink
          icon={<RiAccountBoxLine />}
          name='Account'
          route='/setting'
        />
        <NonExtendedLink
          icon={<Si1Password />}
          name='Change password'
          route='/setting/update-password'
        />
      </div>
    </>
  );
}
