import ButtonBack from "../ui/ButtonBack";
import Heading from "../ui/Heading";
import P from "../ui/P";

function PageNotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center   p-10 gap-4 bg-lime-200 text-lime-950 flex-col ">
      <Heading as="h1">Page not found ☹</Heading>
      <P as="large">Something went wrong! Please go back and try again.</P>
      <ButtonBack />
    </div>
  );
}

export default PageNotFound;
