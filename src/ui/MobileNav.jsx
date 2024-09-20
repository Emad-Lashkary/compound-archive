import { IoMenuSharp } from "react-icons/io5";
import Heading from "./Heading";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        className=" rounded-br-2xl rounded-tl-2xl bg-gradient-to-br from-blue-400 to-blue-800 p-2"
        onClick={() => setIsOpen((open) => !open)}
      >
        <IoMenuSharp className="text-blue-50" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-0 z-50 flex h-screen w-full flex-col items-center gap-5 bg-gradient-to-br from-lime-900 via-black to-blue-900  pt-10 transition-all">
          <button
            className="absolute right-[8%] top-[4%] scale-150 z-50 text-blue-50 p-1 bg-gradient-to-br from-lime-900 via-black to-blue-900 rounded-full opacity-90"
            onClick={() => setIsOpen((open) => !open)}
          >
            <IoMdClose className="size-8" />
          </button>
          <img
            src="sidebar-background.jpg"
            alt="sidebar background"
            className="mobileNav"
          />
          <Logo as="sidebar" />
          <Heading as="h2" className="text-blue-50">
            Compound Archive
          </Heading>
          <MainNav onClick={() => setIsOpen((open) => !open)} />
        </div>
      )}
    </div>
  );
}

export default MobileNav;
