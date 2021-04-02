import TopNavbar from "./navBar/topNavbar";
import setSidebarDynamically from "../components/utils/setSidebarDynamically";
import { useRouter } from "next/router";
import Breadcrumbs from "./global/breadcrumbs";
const ContainerWrapper = (props) => {
  const router = useRouter();
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          {setSidebarDynamically(router.pathname)}

          <div className='container flex-1 '>
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
