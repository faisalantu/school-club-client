import SideBar from "../navBar/sideBar";
import SettingSideBar from "../setting/sideBar";
import AdminSidebar from "../admin/adminSideBar";
const setSidebarDynamically = (path) => {
  const validSettingRouteFormat = /\/setting/;
  const validAdminRouteFormat = /\/admin/;
  if (validSettingRouteFormat.test(path)) {
    return <SettingSideBar className='flex-1' />;
  } else if (validAdminRouteFormat.test(path)) {
    return <AdminSidebar className='flex-1' />;
  } else {
    return <SideBar className='flex-1' />;
  }
};

export default setSidebarDynamically;
