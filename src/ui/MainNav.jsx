import { GrGallery, GrOverview } from "react-icons/gr";
import P from "./P";
import SidebarItem from "./SidebarItem";
import { IoLanguage } from "react-icons/io5";
import { LuMusic } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

function MainNav({ onClick }) {
  return (
    <ul className="no-scrollbar mt-3  flex sm:max-h-56 flex-col  items-center gap-2 overflow-scroll border-x-2 border-blue-300 px-8 z-50">
      <SidebarItem onClick={onClick} to="/">
        <GrOverview />
        <P as="medium">Overview</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/biography">
        <FaRegUser />
        <P as="medium">Biography</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/gallery">
        <GrGallery />
        <P as="medium">Gallery</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/phrases">
        <IoMdBook />
        <P as="medium">Phrases</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/vocabs">
        <IoLanguage />
        <P as="medium">Vocabs</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/musics">
        <LuMusic />
        <P as="medium">Musics</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/movies">
        <BiMoviePlay />
        <P as="medium">Movies</P>
      </SidebarItem>

      <SidebarItem onClick={onClick} to="/settings">
        <MdOutlineSettings />
        <P as="medium">Settings</P>
      </SidebarItem>
    </ul>
  );
}

export default MainNav;
