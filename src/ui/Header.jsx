import { MdLogout } from "react-icons/md";
import Button from "./Button";
import Heading from "./Heading";
import { useLogout } from "../features/authentication/useLogout";
import MobileNav from "./MobileNav";

function Header() {
  const { logout, isLoading } = useLogout();

  return (
    <header className="sm:static fixed top-0  w-full z-50 opacity-[98%] sm:opacity-95 col-span-[2/-1] main-header flex h-16 items-center justify-between bg-gradient-to-r from-lime-600  to-lime-300 via-blue-600 px-5">
      <Heading
        as="h3"
        className="text-blue-50 font-bold border-b-[1px] pb-1 px-3"
      >
        Compound Archive
      </Heading>
      <div className="flex gap-4">
        <MobileNav />
        <Button as="logout" onclick={logout} disabled={isLoading}>
          <MdLogout className="text-blue-50" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
