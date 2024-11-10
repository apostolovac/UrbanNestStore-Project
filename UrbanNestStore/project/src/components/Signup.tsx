import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {useStore} from "../store/useStore";
import view from "../assets/view.png"


const SignUp = () => {
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  // From the Zustand store to handle the sign-up process
  const register = useStore((state) => state.register);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Function to handle checkbox
  const handleChange = () => {
    setChecked(!checked);
  };

  // Function to handle form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    register(userName, email, password)
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  if (errorMessage) {
    return <p>Failed to Signup: {errorMessage}</p>;
  }
  
  return (
    <>
    <div>
    <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        aria-label="UserName"
        className="border-b-2 text-color-gray"
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        aria-label="Email"
        className="border-b-2 text-color-gray"
      />
      
      <div className="flex justify-between border-b-2 text-color-gray">
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
      <label className="checkbox-inline text-color-gray">
        <input type="checkbox" checked={checked}
          onChange={handleChange}/> I agree with <b className="text-color-black">Privacy Policy</b> and <b className="text-color-black">Terms of Use</b></label>
      <button
        type="submit"
        className="h-12 rounded-lg text-color-white bg-color-blue">
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
    </div>
    </>
  );
};

export default SignUp;