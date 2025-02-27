import { Outlet, useLocation } from "react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function Layout() {
  const location = useLocation();

  const showSideBar = location.pathname === "/products";
  return (
    <div
      className={`grid grid-rows-[100px_1fr_100px] min-h-screen ${
        showSideBar ? "grid-cols-[250px_1fr]" : "grid-cols-[1fr]"
      }`}
    >
      <div className="col-span-2">
        <NavBar />
      </div>

      {showSideBar && <SideBar />}

      <div className="p-4 border">
        <Outlet />
      </div>
      <div className="col-span-2 ">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
