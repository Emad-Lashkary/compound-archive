import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

function Modal({ children, setOpenModal }) {
  //!useOutSideClick
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenModal((show) => !show);
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [setOpenModal],
  );
  //!!!!

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full backdrop-blur-sm">
      <div
        ref={ref}
        className="bg-red fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]"
      >
        <button
          onClick={() => setOpenModal((show) => !show)}
          className="absolute right-3 top-3 z-50 scale-125 rounded-full p-1 hover:bg-lime-200"
        >
          <IoMdClose />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
