import { useState } from "react";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form className="flex w-[20rem] flex-col gap-2 rounded-2xl bg-gradient-to-r from-blue-400 via-lime-300 to-blue-400 opacity-90 sm:w-auto">
      <Heading
        as="h2"
        className="rounded-t-2xl bg-gradient-to-r from-blue-400 via-lime-400 to-blue-400 p-5 text-xl sm:text-5xl font-serif"
      >
        Login to Compound Archive
      </Heading>
      <div className="felx flex-col justify-between p-4">
        <label htmlFor="email">
          <P as="large"> Email:</P>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          placeholder=" example@email.com"
          className="mt-2 w-full bg-lime-100"
          disabled={isLoading}
        />
      </div>
      <div className="felx gap-2 p-4">
        <label htmlFor="password">
          <P as="large">password:</P>
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          id="password"
          placeholder=" ********"
          className="mt-2 w-full bg-lime-100"
          disabled={isLoading}
        />
      </div>
      <Button
        onclick={handleSubmit}
        className="rounded-b-2xl bg-gradient-to-r from-blue-400 via-lime-400 to-blue-400"
        disabled={isLoading}
      >
        {isLoading ? <SpinnerMini /> : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
