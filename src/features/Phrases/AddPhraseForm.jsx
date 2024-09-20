import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SpinnerMini from "../../ui/SpinnerMini";
import toast from "react-hot-toast";
import { addPhrase } from "../../services/ApiPhrases";
import { useUser } from "../authentication/useUser";

function AddVocabForm({ setOpenModal }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  const { isLoading, mutate } = useMutation({
    mutationFn: addPhrase,
    onSuccess: () => {
      toast.success("New phrase successfully added");
      queryClient.invalidateQueries({ queryKey: ["phrases"] });
      reset();
      setOpenModal((show) => !show);
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    if (!authed) {
      toast.error("You need login to access adding new phrase.");
      return;
    }
    mutate(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-[40vh] w-[95%] scale-125 flex-col text-lime-950 font-medium items-center justify-center gap-5 rounded-3xl bg-gradient-to-br from-lime-600 via-lime-300 to-blue-600 bg-opacity-45 p-6 shadow-2xl shadow-lime-100 sm:h-[55vh] sm:w-[45vw] sm:scale-100"
    >
      <img
        src="vocabs-form.png"
        alt="sidebar background"
        className="absolute h-[100%] w-[100%] rounded-3xl opacity-20"
      />
      <Heading as="h3">Add new phrases</Heading>
      <div className="flex w-[70%] flex-col gap-2">
        <label htmlFor="phrase">Input phrase:</label>
        <input
          className="z-10 rounded-full px-2"
          placeholder="new phrase"
          type="text"
          id="phrase"
          {...register("phrase")}
          required
        />
      </div>

      <div className="flex w-[70%] flex-col gap-2">
        <label htmlFor="meaning">Input meaning:</label>
        <input
          className="z-10 rounded-full px-2"
          placeholder="meaning"
          type="text"
          id="meaning"
          {...register("meaning")}
          required
        />
      </div>

      <div className="z-50 flex w-[70%] flex-col gap-2">
        <label htmlFor="difficulty">Input difficulty:</label>
        <select
          id="difficulty"
          {...register("difficulty")}
          className="scale-75 rounded-full sm:scale-100"
        >
          <option value="basic">Basic</option>
          <option value="intermediate">Intermediate</option>
          <option value="advance">Advance</option>
        </select>
      </div>
      <div className="flex gap-2">
        <Button as="reset">Cancel</Button>
        <Button className="z-10 w-32 rounded-2xl">
          {isLoading ? <SpinnerMini /> : "Click to add"}
        </Button>
      </div>
    </form>
  );
}

export default AddVocabForm;
