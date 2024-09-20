import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaRegUser,
} from "react-icons/fa";
import FeaturesHeader from "../ui/FeaturesHeader";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiReactquery,
  SiReactrouter,
  SiStyledcomponents,
} from "react-icons/si";

import Footer from "../features/dashboard/Footer";

function Biography() {
  return (
    <section className="flex flex-col items-center text-blue-900">
      <FeaturesHeader icon={<FaRegUser size="22" />}>
        Biography Page
      </FeaturesHeader>

      <div className="flex w-[90%] mt-5 gap-8 items-center sm:flex-row flex-col">
        <img
          src="developer.jpg"
          alt="compound archives developer"
          className="w-44 rounded-3xl p-1 border border-blue-900 transition-all hover:p-0"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl border-t border-blue-900 w-fit pr-5 pt-3">
            Emad Lashkary
          </h4>
          <span className="text-2xl  border-b border-blue-900 pb-3">
            This page provides a concise overview and the resume of the
            developer responsible for this web application.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[90%] mt-12 ">
        <span className="text-lg">
          My name is Emad Lashkary, born on August 13, 2003. I reside in Mashhad
          and am currently pursuing a degree in Computer Engineering at Azad
          University of Mashhad. I have been studying frontend development for
          the past 18 months, primarily through various Udemy courses and
          self-directed learning.
        </span>
        <div className="flex items-center gap-8 sm:flex-row flex-col-reverse mt-8">
          <span className="text-sm">
            I am a dedicated React Developer with 18 months of focused
            experience in frontend development. My journey in frontend began
            with the HTML and CSS course by Jonas Schmedtmann on Udemy, which
            laid a strong foundation in web design. I further honed my design
            skills through extensive coding practice and tutorials on various
            YouTube channels.
            <br />
            <br />
            After mastering styling techniques, I advanced my knowledge by
            completing the Ultimate JavaScript course by Jonas Schmedtmann,
            followed by his comprehensive React course. Through these courses, I
            gained proficiency in numerous React packages, including Redux,
            Contexts, React Router and React Query.
            <br />
            <br />
            In addition to my React expertise, I am well-versed in modern
            styling tools such as Tailwind CSS and Styled Components, enabling
            me to create visually appealing and responsive web applications.
          </span>
          <img
            src="developer2.jpg"
            alt="compound archives developer"
            className="w-56 rounded-3xl p-1 border border-blue-900 transition-all hover:p-0"
          />
        </div>
      </div>

      <div className="flex justify-around w-[95%] sm:w-[60%] text-blue-900 text-4xl sm:text-5xl pt-7 sm:pt-10 hover:[&>*]:text-blue-800">
        <FaHtml5 />
        <FaReact />
        <RiTailwindCssFill />
        <FaJsSquare />
        <SiReactrouter />
        <SiStyledcomponents />
        <SiReactquery />
        <FaCss3Alt />
      </div>

      <Footer />
    </section>
  );
}

export default Biography;
