import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {useStore} from "../store/useStore";
import view from "../assets/view.png"


const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  // Access the Signin function from Zustand store
  const Signin = useStore((state) => state.Signin);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    Signin(email, password);

   setTimeout(() => {
      if (useStore.getState().isLoggedIn) {
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
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        
      />
      <div className="cursor-pointer" onClick={togglePasswordVisibility}>
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