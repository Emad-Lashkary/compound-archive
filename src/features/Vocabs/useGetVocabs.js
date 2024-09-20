import { useQuery } from "@tanstack/react-query";
import { getVocabs } from "../../services/ApiVocabs";

function useGetVocabs() {
  const { data: vocabRows, isLoading } = useQuery({
    queryKey: ["vocabs"],
    queryFn: getVocabs,
  });

  return { vocabRows, isLoading };
}
export default useGetVocabs;
