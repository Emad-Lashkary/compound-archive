import SpinnerMini from "./SpinnerMini";

function Button({ children, onclick, className, as, disabled }) {
  if (as === "logout") {
    return (
      <button
        onClick={onclick}
        className="rounded-full p-[0.3rem] px-2 bg-gradient-to-br from-blue-400 to-blue-800 transition-all hover:border-blue-600  sm:border-2 sm:border-blue-800 sm:p-2"
        disabled={disabled}
      >
        {disabled ? <SpinnerMini /> : children}
      </button>
    );
  }
  if (as === "reset") {
    return (
      <button
        type="reset"
        onClick={onclick}
        className={`z-10 flex items-center justify-center rounded-2xl bg-blue-50 px-3 py-2 transition-all hover:bg-blue-100 ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onclick}
      className={`flex items-center justify-center bg-blue-300 px-3 py-2 transition-all hover:bg-blue-400 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
