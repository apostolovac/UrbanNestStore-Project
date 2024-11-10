import checked from "../assets/checked.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import threeblue from "../assets/threeblue.png";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center mb-8">
  
      <div className="flex flex-row items-center text-center p-4">
        <img
          src={currentStep === 0 ? one : checked}
          alt="Shopping Cart"
          className="w-8 h-8 mr-2 mb-5"
        />
        <span className={`font-bold ${currentStep === 0 ? 'text-color-black border-b-2 pb-5 border-color-black' : 'text-color-blue border-b-2 pb-5 border-color-blue'}`}>
          Shopping Cart
        </span>
      </div>
  
      <div className="flex flex-row items-center text-center p-4">
        <img
          src={currentStep === 1 ? two : checked}
          alt="Checkout"
          className="w-8 h-8 mr-2 mb-5"
        />
        <span className={`font-bold ${currentStep === 1 ? 'text-color-black border-b-2 pb-5 border-color-black' : 'text-color-blue border-b-2 pb-5 border-color-blue'}`}>
          Checkout Details
        </span>
      </div>
  
      <div className="flex flex-row items-center text-center p-4">
        <img
          src={currentStep === 2 ? threeblue : three}
          alt="Order Complete"
          className="w-8 h-8 mr-2 mb-5"
        />
        <span className={`font-bold ${currentStep === 2 ? 'text-color-blue border-b-2 pb-5 border-color-blue' : 'text-gray-400 border-b-2 pb-5 border-transparent'}`}>
          Order Complete
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;