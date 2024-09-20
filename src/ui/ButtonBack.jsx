import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function ButtonBack() {
  return (
    <Link
      to={-1}
      className="flex items-center bg-lime-300 px-3 py-2 gap-2 rounded-full hover:bg-lime-400"
    >
      Back <HiOutlineArrowLeft />
    </Link>
  );
}

export default ButtonBack;
