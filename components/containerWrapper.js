import SideBar from "./navBar/sideBar";
import SettingSideBar from "./setting/sideBar";
import TopNavbar from "./navBar/topNavbar";
import { useRouter } from 'next/router'
const ContainerWrapper = (props) => {
  const router = useRouter()
  // console.log(router.pathname)
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          {
            (router.pathname === '/setting' || router.pathname === '/setting/update-password' || router.pathname === '/setting/update') 
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
