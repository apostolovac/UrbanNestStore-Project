import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../store/useAuthStore";
import view from "../assets/view.png"


const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const Signin = useAuthStore((state) => state.Signin);
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    Signin(email, password);

   setTimeout(() => {
      if (useAuthStore.getState().isLoggedIn) {
        navigate("/home");
      } else {
        setErrorMessage("Signin failed!");
        setLoading(false);
      }
    }, 1000);
  };

  if (errorMessage) {
    return <p>Failed to Signin: {errorMessage}</p>;
  }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="border-b-2"
      />
      <div className="flex justify-between border-b-2">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        
      />
      <div className="cursor-pointer">
        <img src={view} alt="eye" />
        </div>
      </div>
      <div className="flex justify-between">
      <label className="checkbox-inline text-color-gray ">
        <input type="checkbox" checked={checked}
          onChange={handleChange}/> Remember me </label>
          <p><b className="text-color-blue hover:underline cursor-pointer">Forgot password?</b></p>
          </div>
      <button
        type="submit"
        className="h-12 rounded-lg text-color-white bg-color-blue"
      >
        {loading ? "Signing in..." : "Signin"}
      </button>
    </form>
    </div>
    </>
  );
};

export default Signin;