import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => navigate("/dashboard", { replace: true }),
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided Email or Password is incorrect");
    },
  });

  return { login, isLoading };
}
