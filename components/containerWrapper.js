import TopNavbar from "./navBar/topNavbar";
import setSidebarDynamically from "../components/utils/setSidebarDynamically";

import RightSideBar from "./navBar/rightsidebar/rightSidBar";
import { useRouter } from "next/router";
import Breadcrumbs from "./global/breadcrumbs";
import useOnClickOutside from "use-onclickoutside";
import Backdrop from "./utils/backdrop";
import { useState, useRef } from "react";
const ContainerWrapper = (props) => {
  //left nab bar
  const [isSidebarShown, setSidebarShown] = useState(false);
  const sidebar = useRef(null);
  const SidebarShownHandler = () => {
    setSidebarShown(!isSidebarShown)

  }
  //event bar 
  const [isSideEventShown, setSideEventShown] = useState(false);
  const rightSideBar = useRef(null);
  const sideEventHandelear = () => {
    setSideEventShown(!isSideEventShown);
    setSidebarShown(false)
  }
  useOnClickOutside(rightSideBar, function () {
    setSideEventShown(false);
  });
  const router = useRouter();
  return (
    <>

      <Backdrop show={isSideEventShown} zIndex='z-30' />
      <Backdrop show={isSidebarShown} zIndex='z-10'  clicked={SidebarShownHandler} />


      <div className=' top-0 sticky z-40  '>
        <TopNavbar SidebarHandler={SidebarShownHandler} isSidebarShown={isSidebarShown} />
      </div>

      <div className=' container mx-auto '>

        <div className='flex'>
          <div ref={sidebar} className={`${!isSidebarShown && ' hidden '} pt-5  left-0 fixed md:relative  md:block  min-h-full z-20`} style={{ backgroundColor: '#EEF0F1' }}>
            {setSidebarDynamically(router.pathname)}
          </div>
          
          <div ref={rightSideBar} > 
            <RightSideBar isSideEventShown={isSideEventShown} sideEventHandelear={sideEventHandelear}/>
          </div>
          

          <div className='container flex-1 pt-5'>
            <div>
              <Breadcrumbs />
            </div>
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerWrapper;
