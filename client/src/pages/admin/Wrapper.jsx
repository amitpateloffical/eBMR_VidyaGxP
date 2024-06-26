import AdminHeaderTop from "../../components/Header/AdminHeader";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Wrapper = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <AdminHeaderTop />
        <Outlet />
      </div>
        {/* <div className="flex flex-grow mt-16">
            <div className="fixed top-16 left-0 w-64 h-full z-40">
            <Sidebar />
            </div>
            <div className="ml-64 flex-grow p-4 overflow-auto">
            <Outlet />
            </div>
        </div> */}
    </div>
  );
};

export default Wrapper;
