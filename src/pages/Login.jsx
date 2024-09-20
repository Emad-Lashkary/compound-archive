import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Login() {
  let screenWidth = window.innerWidth;
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="absolute opacity-50 h-screen w-full bg-gradient-to-bl from-blue-800 via-lime-600 to-blue-900 pointer-events-none"></div>
      <img
        src={screenWidth > 450 ? "/login-back.png" : "/login-back2.png"}
        alt="login-back"
        className="absolute z-[-1] h-screen w-full opacity-85 blur-[0.1px]"
      />
      <Logo />
      <LoginForm />
      <Button
        onclick={() => navigate("/dashboard")}
        className="mt-2 rounded-full bg-gradient-to-r from-blue-800 via-lime-400 to-blue-800 text-blue-50"
      >
        See page without Login
      </Button>
    </div>
  );
}

export default Login;
