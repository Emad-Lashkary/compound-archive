import { useEffect, useState } from "react";
import useGetPhrases from "../features/Phrases/useGetPhrases";
import { useSearchParams } from "react-router-dom";

function Searchbar({ param }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { phraseRows } = useGetPhrases();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      const searchedPosts =
        searchQuery.length > 0
          ? phraseRows.filter((phraseRow) =>
              `${phraseRow.phrase} ${phraseRow.meaning}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
          : phraseRows;
      if (searchedPosts) {
        const ids = searchedPosts.map((post) => post.id);
        searchParams.set(`search-${param}`, ids.join("-"));
        setSearchParams(searchParams);
      }
    },
    [searchQuery, phraseRows, param, searchParams, setSearchParams]
  );

  return (
    <div className="flex w-[95%] justify-center rounded-lg bg-gradient-to-r from-lime-600 via-blue-600 to-lime-300 p-3">
      <input
        className="w-full rounded-lg bg-white p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={`Search ${param}....`}
      />
    </div>
  );
}

export default Searchbar;
