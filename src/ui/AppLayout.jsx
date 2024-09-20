import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid-cols-[20rem_1fr] grid-rows-[auto_1fr] sm:grid sm:h-screen">
      <Header />
      <Sidebar />
      <main className="overflow-scroll bg-gradient-to-br from-lime-50 via-blue-50 to-blue-100 mt-16 sm:mt-0">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
