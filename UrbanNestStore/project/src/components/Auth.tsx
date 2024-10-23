import { useState } from "react";
import Signin from "./Signin";
import SignUp from "./Signup";

const Auth = (): JSX.Element => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  return (
    <div className="flex ">
    <div>
      <img src="https://s3-alpha-sig.figma.com/img/0f01/03c2/5b150d01d5aac6d2b7fc42b1c424e8b3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yo5Cf-FZjP8A9NkiAR1yYfzkqwmmbM4V5fAu-2KC7OnZZSeIbXeyaTB0FV131eayW~Q3k3TSCsaKU2Ly4mZ~sR9HWYwL1o7OEvdRxcu8Hy16T~dvH22LdCpfGw4fg4U4~5erk9jh0FY~ROZXBWukw95ykkqkaRIdeWNgtBABG1Bvj0u1Jyt6EJSY~jnMRoHAEIH9-vR6a7nmqWzBtcWeqOyUNxVYW8aTnLHgCSx8Ph5RY59JKTDaRUUhqNiTUlm-0A6P9OMtZC5bXeaGHuPaf9EQUIBwOkINuD4P9s7~X-KmV1Cf2kMJNjfYAnB1d4FVOCh9OoYps9vHexCJzrTtpw__" alt="Image of Clothing" width="700" />
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
export default Auth;