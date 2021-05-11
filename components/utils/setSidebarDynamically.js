import SideBar from "../navBar/sideBar";
import SettingSideBar from "../setting/sideBar";
import AdminSidebar from "../admin/adminSideBar";
import DashboardSidebar from "../dashboard/dashboardSidebar";
const setSidebarDynamically = (path) => {
  const validSettingRouteFormat = /\/setting/;
  const validAdminRouteFormat = /\/admin/;
  const validDashboardRouteFormat = /\/dashboard/;
  if (validSettingRouteFormat.test(path)) {
    return <SettingSideBar className='flex-1' />;
  } else if (validAdminRouteFormat.test(path)) {
    return <AdminSidebar className='flex-1' />;
  } else if (validDashboardRouteFormat.test(path)) {
    return <DashboardSidebar className='flex-1' />;
  } else {
    return <SideBar className='flex-1' />;
  }
};

export default setSidebarDynamically;
