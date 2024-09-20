import { useSearchParams } from "react-router-dom";
import VocabRow from "./VocabRow";
import useGetVocabs from "./useGetVocabs";
import Spinner from "../../ui/Spinner";
import Sort from "../../ui/Sort";

function VocabsTable() {
  const { vocabRows, isLoading } = useGetVocabs();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  searchParams.get("sort-vocab") === "new-first" &&
    vocabRows.sort((a, b) => new Date(b.id) - new Date(a.id));
  searchParams.get("sort-vocab") === "old-first" &&
    vocabRows.sort((a, b) => new Date(a.id) - new Date(b.id));

  return (
    <div className="w-full">
      <div className="m-3 mb-10 flex md:w-[90%] w-[95%] flex-col rounded-3xl bg-gradient-to-bl from-lime-600 via-lime-300 to-blue-600 bg-opacity-45 px-2 pt-2 sm:rounded-t-3xl">
        {vocabRows?.map((vocab) => (
          <VocabRow vocab={vocab} key={vocab.id} />
        ))}
      </div>
    </div>
  );
}

export default VocabsTable;
