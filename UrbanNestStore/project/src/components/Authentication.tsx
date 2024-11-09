import { useState } from "react";
import Signin from "./Signin";
import SignUp from "./Signup";
import heatherford from "../assets/heatherford.png"

const Authentication = (): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  return (
    <div className="flex ">
    <div>
      <img src={heatherford} alt="Image of Clothing"  />
    </div>
      <div className=" mt-32 w-2/4 flex justify-center ">
      
        <div className="w-96">
        <h1 className="text-4xl font-medium leading-10 mb-4">
          {isSignUp ? "SignUp" : "SignIn"}
        </h1>
          <h2 className="font-normal text-base text-color-gray mb-px pb-3.5"> {isSignUp ? "Already have an account?" : "Don’t have an account yet?"}
          <button
            className="text-color-blue hover:underline "
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Signin!"
              : "Sign Up"}
          </button>
          </h2>
          {isSignUp ? <SignUp /> : <Signin />}
        </div>
      </div>
    </div>
  );
};
export default Authentication;