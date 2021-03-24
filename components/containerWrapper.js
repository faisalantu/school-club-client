import SideBar from "./navBar/sideBar";
import TopNavbar from "./navBar/topNavbar";

const ContainerWrapper = (props) => {
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          <SideBar className='flex-1 ' />
          <div className='container flex-1 '>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerWrapper;
