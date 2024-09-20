function Heading({ as, children, className }) {
  if (as === "h1") {
    return (
      <h1 className={`text-5xl text-lime-800 ${className}`}>{children}</h1>
    );
  }
  if (as === "h2") {
    return <h2 className={`text-3xl ${className}`}>{children}</h2>;
  }
  if (as === "h3") {
    return <h3 className={`text-2xl  ${className}`}>{children}</h3>;
  }
  if (as === "h4") {
    return (
      <h4 className={`text-2xl text-lime-800 ${className}`}>{children}</h4>
    );
  } else
    return (
      <h2 className={`text-3xl text-lime-800 ${className}`}>{children}</h2>
    );
}

export default Heading;
