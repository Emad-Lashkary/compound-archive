import Heading from "./Heading";
import Button from "./Button";
import { GrOverview } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { SiTicktick } from "react-icons/si";

function FeaturesHeader({ children, icon }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  function onClick() {
    navigate("/");
  }

  return (
    <div className="flex w-full items-center justify-between border-b-2 bg-gradient-to-b from-blue-100 to-lime-50 border-lime-200 px-6 py-4">
      <Heading as="h3">{children}</Heading>
      <div className="flex items-center justify-center gap-4">
        {authed ? (
          <div className="hidden items-center gap-2 rounded-full bg-green-400 px-3 py-1 sm:flex">
            <span>Loged in</span> <SiTicktick />
          </div>
        ) : (
          <button
            className="hidden items-center gap-2 rounded-full bg-rose-400 px-2 py-1 sm:flex"
            onClick={() => navigate("/login")}
          >
            need login to add !
          </button>
        )}
        {icon}
        <Button
          onclick={onClick}
          className="rounded-full bg-gradient-to-br from-blue-400 to-blue-800 transition-all hover:border-blue-600  sm:border-2 sm:border-blue-800"
        >
          <GrOverview className="text-blue-50" />
        </Button>
      </div>
    </div>
  );
}

export default FeaturesHeader;
