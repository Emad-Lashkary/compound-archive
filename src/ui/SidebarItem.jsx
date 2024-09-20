import { NavLink } from "react-router-dom";

function SidebarItem({ children, to, onClick }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2 transition-all  hover:scale-95 sm:text-blue-200 text-blue-100 sm:text-lg text-2xl"
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default SidebarItem;
