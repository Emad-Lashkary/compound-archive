import Heading from "./Heading";
import Logo from "./Logo";
import MainNav from "./MainNav";
import P from "./P";

function Sidebar() {
  return (
    <div className="row-span-full hidden flex-col items-center gap-5 bg-blue-100 pt-10 sm:flex">
      <img
        src="sidebar-background.jpg"
        alt="sidebar background"
        className="sidebarImg"
      />
      <Logo as="sidebar" />
      <Heading as="h3" className="z-50 text-blue-100 font-semibold font-serif">
        Compound Archive
      </Heading>
      <MainNav />
    </div>
  );
}

export default Sidebar;
