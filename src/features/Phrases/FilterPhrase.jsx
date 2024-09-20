import { useSearchParams } from "react-router-dom";

function FilterPhrase() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("difficulty", value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-2 rounded-full sm:ml-10">
      <button
        className={`rounded-l-full bg-blue-100 px-5 py-1 transition-all hover:bg-blue-200 ${
          searchParams.get("difficulty") === "all" && "bg-blue-200"
        }`}
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className={`bg-blue-100 px-3 py-1 transition-all hover:bg-green-400 ${
          searchParams.get("difficulty") === "basic" && "bg-green-400"
        }`}
        onClick={() => handleClick("basic")}
      >
        BSC
      </button>
      <button
        className={`bg-blue-100 px-3 py-1 transition-all hover:bg-teal-300 ${
          searchParams.get("difficulty") === "intermediate" && "bg-teal-300"
        }`}
        onClick={() => handleClick("intermediate")}
      >
        INT
      </button>
      <button
        className={`rounded-r-full bg-blue-100 px-3 py-1 transition-all hover:bg-rose-400 ${
          searchParams.get("difficulty") === "advance" && "bg-rose-400"
        }`}
        onClick={() => handleClick("advance")}
      >
        ADV
      </button>
    </div>
  );
}

export default FilterPhrase;
