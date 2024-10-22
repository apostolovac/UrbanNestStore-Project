import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../helpers/auth";
import view from "../assets/view.png"


const SignUp: React.FC = () => {
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);
  };

  // Function to handle form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

   

    try {
      const response = await register(userName, email, password);
      if (response.success) {
        navigate("/home");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Sign up failed! Please try again!");
    } finally {
      setLoading(false);
    }
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
      <label className="checkbox-inline text-color-gray">
        <input type="checkbox" checked={checked}
          onChange={handleChange}/> I agree with <b className="text-color-black">Privacy Policy</b> and <b className="text-color-black">Terms of Use</b></label>
      <button
        type="submit"
        className="h-12 rounded-lg text-color-white bg-color-blue"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
    </div>
    </>
  );
};

export default SignUp;