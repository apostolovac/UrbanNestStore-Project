import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './Progressbar';

const Checkout: React.FC = () => {
  const { items} = useStore();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | null>(null);
  const navigate = useNavigate();

  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Navigate to the Order Complete page
    navigate('/ordercomplete');
  };

  return (
    <>
    <div className="p-4 max-w-screen-lg mx-auto">
      {/* Main Title */}
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Progress Bar */}
      <ProgressBar currentStep={1} />

      {/* Main Checkout Form */}
      <div className="lg:flex lg:space-x-8">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-8">

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="flex space-x-4">
              <input type="text" placeholder="First Name" className="w-1/2 border p-2" />
              <input type="text" placeholder="Last Name" className="w-1/2 border p-2" />
            </div>
            <input type="tel" placeholder="Phone Number" className="w-full border p-2 mt-2" />
            <input type="email" placeholder="Email" className="w-full border p-2 mt-2" />
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h1 className="text-lg font-semibold">Shipping Address</h1>
            <input type="text" placeholder="Street Address" className="w-full border p-2" />
            <div className="flex space-x-4">
              <input type="text" placeholder="Country" className="w-1/3 border p-2" />
              <input type="text" placeholder="City" className="w-1/3 border p-2" />
              <input type="text" placeholder="ZIP Code" className="w-1/3 border p-2" />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="form-radio"
                />
                <span>Pay by Credit Card</span>
              </label>
              {paymentMethod === 'card' && (
                <div className="space-y-2">
                  <input type="text" placeholder="Card Number" className="w-full border p-2" />
                  <div className="flex space-x-4">
                    <input type="text" placeholder="Expiration Date" className="w-1/2 border p-2" />
                    <input type="text" placeholder="CVC" className="w-1/2 border p-2" />
                  </div>
                  <button className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
                  onClick={handlePlaceOrder}
                  >Place Order</button>
                </div>
              )}
              
              <label className="flex items-center space-x-2 mt-4">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="form-radio"
                />
                <span>Pay with PayPal</span>
              </label>
              {paymentMethod === 'paypal' && (
                <div>
                  <input type="email" placeholder="PayPal Email" className="w-full border p-2 mt-2" />
                  <button className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
                  onClick={handlePlaceOrder}
                  >Place Order</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
          {items.map((item, index) => (
  <div key={`${item.product.id}-${index}`} className="flex justify-between border-b pb-2">
    <span>{item.product.title}</span>
    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
  </div>
))}
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;