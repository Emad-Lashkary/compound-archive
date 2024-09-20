function Logo({ as }) {
  if (as) {
    return (
      <img
        src="/logo.jpg"
        alt="logo"
        className={`h-[12rem] w-auto opacity-95 transition-all hover:scale-105 active:scale-110 z-50 p-2  rounded-full bg-gradient-to-br from-blue-800 to-lime-600 bg-opacity-75`}
      />
    );
  }
  return (
    <img
      src="/logo.jpg"
      alt="logo"
      className={`h-[12rem] w-auto opacity-75 transition-all z-50 p-2  rounded-full `}
    />
  );
}

export default Logo;
