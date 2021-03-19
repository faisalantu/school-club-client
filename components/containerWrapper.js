import SideBar from "./navBar/sideBar";
import TopNavbar from "./navBar/topNavbar";
import Home from "./home";

const Container = (props) => {
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          <SideBar className='flex-1 ' />
          <div className='container flex-1 '>
            {props.children}
           <Home/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
