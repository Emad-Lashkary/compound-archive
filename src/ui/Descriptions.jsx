import { useRef, useState } from "react";

function Descriptions({ children, title, className }) {
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      ref={contentRef}
      className={`transition-max-height duration-500 overflow-hidden flex flex-col gap-2 w-[95%] rounded-lg p-2 bg-gradient-to-br from-lime-300 to-blue-300 text-blue-950  ${
        show ? "max-h-full" : "h-14"
      } ${className}`}
      style={{
        maxHeight: show ? `${contentRef.current.scrollHeight}px` : "56px",
      }}
    >
      <div className="flex justify-between pl-3 border-b">
        <h3 className="text-lg">{title} descriptions:</h3>
        <button
          className="px-4 py-1  rounded-lg bg-blue-100 mb-1"
          onClick={() => setShow((show) => !show)}
        >
          {show ? "Colapse" : "Expand"}
        </button>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default Descriptions;
