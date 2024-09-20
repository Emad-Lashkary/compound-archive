import { useSearchParams } from "react-router-dom";

function Sort({ param, className }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set(`sort-${param}`, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => handleClick("new-first")}
        className={`my-3 rounded-l-full bg-blue-100 px-3 py-1 ${
          searchParams.get(`sort-${param}`) === "new-first" && "bg-blue-200"
        }`}
      >
        New First
      </button>
      <button
        onClick={() => handleClick("old-first")}
        className={`my-3 rounded-r-full bg-blue-100 px-3 py-1 ${
          searchParams.get(`sort-${param}`) === "old-first" && "bg-blue-200"
        }`}
      >
        Old First
      </button>
    </div>
  );
}

export default Sort;
