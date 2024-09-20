import { useForm } from "react-hook-form";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addVocab } from "../../services/ApiVocabs";
import SpinnerMini from "../../ui/SpinnerMini";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";

function AddVocabForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  const { isLoading, mutate } = useMutation({
    mutationFn: addVocab,
    onSuccess: () => {
      toast.success("New vocab successfully added");
      queryClient.invalidateQueries({ queryKey: ["vocabs"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    if (!authed) {
      toast.error("You need login to access adding new vocab.");
      return;
    }
    mutate(data);
  }

  return (
    <div className="md:mt-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative sm:w-[35vw] w-[95vw]"
      >
        <img
          src="vocabs-form.png"
          alt="sidebar background"
          className="absolute  rounded-3xl opacity-30  h-[100%] w-[100%]"
        />

        <div className="flex flex-col items-center gap-7 py-4">
          <Heading as="h3" className="">
            Add new vocabs
          </Heading>
          <div className="flex w-[70%] flex-col gap-2">
            <label htmlFor="word">Input Word:</label>
            <input
              className="z-10 rounded-full px-2"
              placeholder="new word"
              type="text"
              id="word"
              {...register("word")}
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
          <div className="flex gap-2">
            <Button as="reset">Cancel</Button>
            <Button className="z-10 w-32 rounded-2xl">
              {isLoading ? <SpinnerMini /> : "Click to add"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddVocabForm;
