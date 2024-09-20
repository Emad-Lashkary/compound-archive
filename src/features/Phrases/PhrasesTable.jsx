import Spinner from "../../ui/Spinner";
import useGetPhrases from "./useGetPhrases";
import PhraseRow from "./PhraseRow";
import { useSearchParams } from "react-router-dom";
import Sort from "../../ui/Sort";
import FilterPhrase from "./FilterPhrase";

function PhrasesTable() {
  const { phraseRows, isLoading } = useGetPhrases();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("difficulty") || "all";
  let searchedValue = searchParams.get("search-phrase") || null;

  searchedValue = searchedValue?.split("-").map(Number);

  let filteredPhraseRows;
  if (filterValue === "all") filteredPhraseRows = phraseRows;
  if (filterValue === "basic")
    filteredPhraseRows = phraseRows.filter(
      (phraseRow) => phraseRow.difficulty === "basic",
    );
  if (filterValue === "intermediate")
    filteredPhraseRows = phraseRows.filter(
      (phraseRow) => phraseRow.difficulty === "intermediate",
    );
  if (filterValue === "advance")
    filteredPhraseRows = phraseRows.filter(
      (phraseRow) => phraseRow.difficulty === "advance",
    );

  if (searchedValue) {
    filteredPhraseRows = filteredPhraseRows.filter((row) =>
      searchedValue.includes(row.id),
    );
  }

  searchParams.get("sort-phrase") === "new-first" &&
    filteredPhraseRows?.sort((a, b) => new Date(b.id) - new Date(a.id));
  searchParams.get("sort-phrase") === "old-first" &&
    filteredPhraseRows?.sort((a, b) => new Date(a.id) - new Date(b.id));

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Sort param="phrase" />
        <FilterPhrase />
      </div>
      <div className="mb-10 flex w-[95%] flex-col gap-2 [&>*:first-child]:rounded-t-3xl [&>*:last-child]:rounded-b-3xl">
        {filteredPhraseRows?.map((phrase) => (
          <PhraseRow phraseRow={phrase} key={phrase.id} />
        ))}
      </div>
    </div>
  );
}

export default PhrasesTable;
