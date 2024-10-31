import React from 'react';
import checked from "../assets/checked.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import threeblue from "../assets/threeblue.png";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-8">

      <div className="flex flex-col items-center text-center">
        <img
          src={currentStep === 0 ? one : checked}
          alt="Shopping Cart"
          className="w-8 h-8"
        />
        <span className={`font-bold ${currentStep === 0 ? 'text-color-blue' : 'text-color-blue'}`}>
          Shopping Cart
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img
          src={currentStep === 1 ? two : checked}
          alt="Checkout"
          className="w-8 h-8"
        />
        <span className={`font-bold ${currentStep >= 1 ? 'text-blue-500' : 'text-black'}`}>
          Checkout Details
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img
          src={currentStep === 2 ? threeblue : three}
          alt="Order Complete"
          className="w-8 h-8"
        />
        <span className={`font-bold ${currentStep === 2 ? 'text-black' : 'text-gray-400'}`}>
          Order Complete
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;