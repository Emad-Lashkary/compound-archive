function P({ children, as, className }) {
  if (as === "small") {
    return <p className={`text-sm  ${className}`}>{children}</p>;
  }
  if (as === "medium") {
    return <p className="text-lg font-medium ">{children}</p>;
  }
  if (as === "large") {
    return <p className="text-xl font-semibold ">{children}</p>;
  }
  return <p className="text-md text-lime-900">{children}</p>;
}

export default P;
