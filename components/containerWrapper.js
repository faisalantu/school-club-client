import SideBar from "./navBar/sideBar";
import SettingSideBar from "./setting/sideBar";
import TopNavbar from "./navBar/topNavbar";
import { useRouter } from 'next/router'
const ContainerWrapper = (props) => {
  const router = useRouter()
  var validSettingRouteFormat = /\/setting/;
  // console.log(router.pathname)
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          {
            (validSettingRouteFormat.test(router.pathname)) 
            ? <SettingSideBar className='flex-1 ' /> 
            : <SideBar className='flex-1 ' />
          }
          <div className='container flex-1 '>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerWrapper;
