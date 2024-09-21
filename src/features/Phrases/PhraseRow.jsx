import { useMutation, useQueryClient } from "@tanstack/react-query";
import P from "../../ui/P";
import { deletePhrase } from "../../services/ApiPhrases";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";
import { BsEraser } from "react-icons/bs";
import { useUser } from "../authentication/useUser";

function PhraseRow({ phraseRow }) {
  const { phrase, meaning, difficulty, id } = phraseRow;
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: () => deletePhrase(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["phrases"],
      });
      toast.success("Phrase successfully deleted");
    },
  });

  function handleDelete() {
    if (!authed) {
      toast.error("you need to login to access delete phrase.");
      return;
    }
    mutate();
  }

  const newLocal = "bg-rose-400";
  return (
    <div className="relative flex justify-between  bg-gradient-to-r from-lime-300 via-blue-400 to-lime-200 px-4 py-4">
      <div className="flex flex-col gap-2">
        <P as="medium" className="text-lime-900">
          {phrase}
        </P>
        <P as="small" className="ml-1 scale-105">
          {meaning}
        </P>
      </div>

      <span
        className={`h-[50%] rounded-full px-3 py-1 ${
          difficulty === "basic" && "bg-green-400"
        } ${difficulty === "intermediate" && "bg-teal-300"} ${
          difficulty === "advance" && newLocal
        } `}
      >
        {difficulty}
      </span>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="absolute bottom-1 right-4 rounded-full p-2 transition-all hover:scale-110 hover:bg-lime-200"
      >
        {isDeleting ? <SpinnerMini /> : <BsEraser />}
      </button>
    </div>
  );
}

export default PhraseRow;
