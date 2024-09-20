import { useSearchParams } from "react-router-dom";

function SortImages() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("sort-img", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleClick("new-first")}
        className={`my-3 rounded-l-full bg-lime-200 px-3 py-1 ${searchParams.get("sort-img") === "new-first" && "bg-lime-300"}`}
      >
        New First
      </button>
      <button
        onClick={() => handleClick("old-first")}
        className={`my-3 rounded-r-full bg-lime-200 px-3 py-1 ${searchParams.get("sort-img") === "old-first" && "bg-lime-300"}`}
      >
        Old First
      </button>
    </div>
  );
}

export default SortImages;
