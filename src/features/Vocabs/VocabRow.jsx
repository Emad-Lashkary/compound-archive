import { useMutation, useQueryClient } from "@tanstack/react-query";
import P from "../../ui/P";
import SpinnerMini from "../../ui/SpinnerMini";
import { deleteVocab } from "../../services/ApiVocabs";
import { BsEraser } from "react-icons/bs";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";

function VocabRow({ vocab }) {
  const { id, word, meaning } = vocab;
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: () => deleteVocab(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["vocabs"],
      });
      toast.success("Vocab successfully deleted");
    },
  });

  function handleDelete() {
    if (!authed) {
      toast.error("you need to login to access deleting vocab.");
      return;
    }
    mutate();
  }

  return (
    <div className="relative">
      <div className="flex items-center border-b-2 border-blue-100 max-w-[93%]">
        <P
          as="small"
          className="w-[32%] scale-105 border-r-2 text-blue-50 border-blue-100 py-4 pl-4 font-semibold"
        >
          {word}
        </P>
        <P as="small" className="pl-4 text-lime-50 w-[68%]">
          {meaning}
        </P>
      </div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="absolute right-0 top-[50%] translate-y-[-50%] rounded-full p-2 transition-all hover:scale-110 hover:bg-blue-100"
      >
        {isDeleting ? <SpinnerMini /> : <BsEraser />}
      </button>
    </div>
  );
}

export default VocabRow;
