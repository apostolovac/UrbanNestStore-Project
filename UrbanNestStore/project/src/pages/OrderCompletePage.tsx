import React from 'react';
import ProgressBar from '../components/Progressbar';
import Navbar from '../components/NavigationBar';
import Footer from '../components/Footer';
import thankyou from "../assets/thankyou.png";
import { useStore } from '../store/useStore';

const OrderComplete: React.FC = () => {
  const { items } = useStore();
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  return (
    <>
      <Navbar />
      <div className='p-4 max-w-screen-lg mx-auto mb-12'>
        <h1 className="text-5xl font-medium text-center my-12">Complete!</h1>
        <ProgressBar currentStep={2} />

        <div className="flex flex-col items-center mt-8 space-y-4 pb-5">
          <div className='flex flex-col items-center justify-center drop-shadow-xl lg:w-[738px] lg:h-[486px] bg-color-white'>
            <img src={thankyou} alt="thankyou" />
            <p className='font-medium text-5xl text-color-blue text-center mx-5 mt-4'>
              Your order has been received
            </p>

            <div className="flex flex-col justify-between gap-7 mt-10 w-6/12 pb-5">
              <div className='flex flex-col lg:flex-row justify-between'>
                <p className='font-semibold text-sm text-color-gray'>Order code:</p>
                <span className='font-semibold text-sm'>#51abty2sa</span>
              </div>
              <div className='flex flex-col lg:flex-row justify-between'>
                <p className='font-semibold text-sm text-color-gray'>Date:</p>
                <span className='font-semibold text-sm'>11.11.2024</span>
              </div>
              <div className='flex flex-col lg:flex-row justify-between'>
                <p className='font-semibold text-sm text-color-gray'>Total:</p>
                <span className='font-semibold text-sm'>${totalPrice.toFixed(2)}</span>
              </div>
              <div className='flex flex-col lg:flex-row justify-between'>
                <p className='font-semibold text-sm text-color-gray'>Payment method:</p>
                <span className='font-semibold text-sm'>Credit Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderComplete;