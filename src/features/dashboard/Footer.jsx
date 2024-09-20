import { MdOutlineMail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import P from "../../ui/P";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-10 flex h-auto w-full items-center justify-center border-t-2 border-blue-200 bg-gradient-to-br from-lime-300 via-blue-100 to-lime-300 px-3 py-6">
      <img
        src="footer-background.jpg"
        alt="footer background"
        className="footerImg"
      />

      <div className="flex flex-col items-center gap-5">
        <P as="large" className="text-blue-900">
          Contact Developer
        </P>
        <a
          className="flex gap-4 border-b-2 border-blue-300 text-blue-900 transition-all hover:scale-105 pb-1 px-4"
          target="_blank"
          rel="noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=emad.lashkar@gmail.com"
        >
          <MdOutlineMail className="size-8" />
          <span>emad.lashkar@gmail.com</span>
        </a>
        <a
          className="flex items-center gap-4 border-b-2 border-blue-300 text-blue-900 transition-all hover:scale-105 pb-1 px-4"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Emad-Lashkary"
        >
          <FiGithub className="size-8" />
          <span>github.com/Emad-Lashkary</span>
        </a>
        <a
          className="flex items-center gap-4 border-b-2 border-blue-300 text-blue-900 transition-all hover:scale-105 pb-1 px-4"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/emad-lashkary"
        >
          <AiOutlineLinkedin className="size-8" />
          <span>linkedin.com/in/emad-lashkary</span>
        </a>
        <a
          className="flex items-center gap-4 border-b-2 pb-1 px-4 border-blue-300 text-blue-900 transition-all hover:scale-105"
          href="tel:+989350633890"
        >
          <FaPhoneAlt className="size-8" />
          <span>09350633890</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
