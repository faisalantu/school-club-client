import TopNavbar from "./navBar/topNavbar";
import setSidebarDynamically from "../components/utils/setSidebarDynamically";
import { useRouter } from "next/router";

const ContainerWrapper = (props) => {
  const router = useRouter();
  return (
    <>
      <TopNavbar />
      <div className=' container mx-auto'>
        <div className='flex'>
          {setSidebarDynamically(router.pathname)}
          <div className='container flex-1 '>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default ContainerWrapper;
