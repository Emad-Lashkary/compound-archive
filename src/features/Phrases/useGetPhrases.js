import { useQuery } from "@tanstack/react-query";
import { getPhrases } from "../../services/ApiPhrases";

function useGetPhrases() {
  const { data: phraseRows, isLoading } = useQuery({
    queryKey: ["phrases"],
    queryFn: getPhrases,
  });

  return { phraseRows, isLoading };
}
export default useGetPhrases;
