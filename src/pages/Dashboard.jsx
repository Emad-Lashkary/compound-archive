import Heading from "../ui/Heading";
import FeaturesOverview from "../features/dashboard/FeaturesOverview";
import { GoAlert } from "react-icons/go";
import { useUser } from "../features/authentication/useUser";
import Footer from "../features/dashboard/Footer";
import P from "../ui/P";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useUser();
  const authed = user?.role === "authenticated";
  const navigate = useNavigate();

  return (
    <div className="mt-3 flex flex-col items-center gap-8">
      <div className="flex flex-col w-[95%] rounded-xl bg-gradient-to-b from-blue-100 to-lime-100 p-5 ">
        <Heading as="h2" className="text-lg sm:text-2xl">
          This platform serves as a secure and welcoming space for users to
          document and explore newly discovered vocabulary and phrases. To
          access and modify data within this website’s database, please log in
          using the email and password provided.
          <br />
          <br /> Dear Visitor, If you discovered this website through my resume,
          the necessary email and password are included therein.
        </Heading>
        <button
          onClick={() => navigate("/biography")}
          className="px-3 py-2 bg-gradient-to-br from-lime-200 to-blue-200 rounded-full mt-4 place-self-end w-fit transition-all hover:text-blue-800"
        >
          Developers' Biography
        </button>
      </div>
      {authed ? (
        <></>
      ) : (
        <P
          as="small"
          className="flex w-[95%] items-center justify-center gap-3 rounded-xl  bg-gradient-to-r from-lime-400 via-blue-800 to-lime-400 px-5 py-2 sm:text-base"
        >
          <GoAlert className="size-7 text-blue-50" />
          <span className="text-blue-50">
            Mutating content on this website is restricted to users who are
            logged in.
          </span>
        </P>
      )}
      <FeaturesOverview />

      <Heading
        ing
        as="h3"
        className="w-[95%] rounded-xl bg-gradient-to-t from-blue-100 to-lime-100 p-5  text-base sm:text-xl"
      >
        This personal archive website has been developed using <b>React.js</b>{" "}
        and styled with <b>Tailwind CSS</b>. The website serves as a
        comprehensive repository for personal documents and photos.
        <br />
        <br />
        <b>Supabase</b> serves as the database, ensuring secure and efficient
        data storage, while <b>React Query</b> is utilized for remote state
        management to enhance performance and user experience. Additionally,{" "}
        <b>React Router</b> is employed for route management, and{" "}
        <b>React Hook Form</b> is used for form handling, facilitating seamless
        user interactions.
        <br />
        <br />
        Furthermore, React Hot Toast, React Icons, and React Loader libraries
        have been integrated to make the user interface as interactive as
        possible. The Unsplash API is also utilized, allowing users to access
        and display new photos on the page.
      </Heading>

      <Footer />
    </div>
  );
}

export default Dashboard;
