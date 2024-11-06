import React from 'react';
import ProgressBar from '../components/ProgressBar';

const OrderComplete: React.FC = () => {
  return (
    <>
    <ProgressBar currentStep={2} />

      <div className="mt-8 space-y-4">
        <p>Your order has been successfully placed. We hope you enjoy your purchase!</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <p>Order Number: #12345</p>
          <p>Estimated Delivery: 3-5 business days</p>
          <p>Shipping Method: Standard</p>
          <p>Contact Support if you need assistance</p>
        </div>
      </div>
      </>
  );
};

export default OrderComplete;