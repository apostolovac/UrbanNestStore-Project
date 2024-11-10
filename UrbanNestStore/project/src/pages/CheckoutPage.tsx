import { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import Navbar from '../components/NavigationBar';
import Footer from '../components/Footer';
import creditcard from "../assets/creditcard.png";
import minus from "../assets/minus.png"
import plus from "../assets/plus.png"
import trash from "../assets/trash.png"

const Checkout = () => {
  const { items } = useStore();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | null>(null);
  const navigate = useNavigate();

  // Calculate the Total Price
  const totalPrice = items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    navigate('/ordercomplete');
  };


  return (
    <>
      <Navbar />
      <div className="p-4 max-w-screen-lg mx-auto mb-12">
        <h1 className="text-5xl font-medium text-center my-12">Check Out</h1>
  
        <ProgressBar currentStep={1} />
  
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-2/3 space-y-8">

            {/* Contact Information */}
            <div className="space-y-4 border border-color-gray rounded px-5 py-10">
              <h2 className="text-xl font-medium	">Contact Information</h2>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-xs font-bold text-color-gray uppercase">First Name</label>
                  <input type="text" placeholder="First name" className="w-full mt-2 border border-color-lightgray p-2" />
                </div>
                <div className="w-1/2">
                  <label className="block text-xs	font-bold text-color-gray uppercase">Last Name</label>
                  <input type="text" placeholder="Last name" className="w-full mt-2 border border-color-lightgray p-2" />
                </div>
              </div>
              <div>
                <label className="block text-xs	font-bold text-color-gray uppercase">Phone Number</label>
                <input type="tel" placeholder="Phone number" className="w-full border border-color-lightgray p-2 mt-2" />
              </div>
              <div>
                <label className="block text-xs	font-bold text-color-gray uppercase">Email Address</label>
                <input type="email" placeholder="Your Email" className="w-full border border-color-lightgray p-2 mt-2" />
              </div>
            </div>
  
            {/* Shipping Address */}
            <div className="space-y-4 border border-color-gray rounded px-5 py-10">
              <h1 className="text-xl font-medium	">Shipping Address</h1>
              <div>
                <label className="block text-xs	font-bold text-color-gray uppercase">Street Address*</label>
                <input type="text" placeholder="Street Address" className="w-full mt-2 border border-color-lightgray p-2" />
              </div>
              <div className="flex flex-col">
                <div className="w-1/3">
                  <label className="block text-xs	font-bold text-color-gray uppercase">Country*</label>
                  <input type="text" placeholder="Country" className="w-full mt-2 border border-color-lightgray p-2" />
                </div>
                <div className="w-1/3">
                  <label className="block text-xs	font-bold text-color-gray uppercase mt-4">Town / City*</label>
                  <input type="text" placeholder="Town / City" className="w-full mt-2 border border-color-lightgray p-2" />
                </div>
                <div className="w-1/3">
                  <label className="block text-xs	font-bold text-color-gray uppercase mt-4">ZIP Code</label>
                  <input type="text" placeholder="ZIP Code" className="w-full border mt-2 border-color-lightgray p-2" />
                </div>
              </div>
            </div>
  
            {/* Payment Method */}
            <div className="space-y-4 border border-color-gray rounded px-5 py-10">
              <h2 className="text-xl font-medium	">Payment Method</h2>
  
              {/* Payment Options */}
              <div className="border-b border-color-lightgray pb-10">
                <label className="flex items-center space-x-2 border border-color-lightgray p-2 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="form-radio accent-black"
                      />
                      <span className='font-normal text-base'>Pay by Credit Card</span>
                    </div>
                    <img src={creditcard} alt="creditcard" />
                  </div>
                </label>
  
                <label className="flex items-center space-x-2 border border-color-lightgray p-2 mt-6">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="form-radio accent-black"
                  />
                  <span className='font-normal text-base'>Pay with PayPal</span>
                </label>
              </div>
  
              {/* Payment Fields */}
              {paymentMethod === 'card' && (
                <div className="space-y-2 mt-4">
                  <label className="block text-xs	font-bold text-color-gray">Card Number</label>
                  <input type="text" placeholder="1234 1234 1234" className="w-full border border-color-lightgray p-2" />
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-xs	font-bold text-color-gray mt-2">Expiration Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full mt-2 border border-color-lightgray p-2" />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-xs	font-bold text-color-gray mt-2">CVC</label>
                      <input type="text" placeholder="CVC code" className="w-full mt-2 border border-color-lightgray p-2" />
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === 'paypal' && (
                <div className="space-y-2 mt-4">
                  <label className="block text-xs	font-bold text-color-gray">PayPal Email</label>
                  <input type="email" placeholder="PayPal Email" className="w-full border border-color-lightgray p-2" />
                </div>
              )}
  
            </div>
            <button
              className="w-full bg-color-blue text-white text-base font-medium p-3 rounded-lg mt-4"
              onClick={handlePlaceOrder}
              disabled={!paymentMethod}
            >
              Place Order
            </button>
          </div>
  
          {/* Order Summary */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 border border-color-gray rounded px-5 py-10 flex flex-col h-full">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-4 px-2">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex flex-col items-center justify-between w-full gap-[20px] mt-8"
                >
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-[58px] h-[70px]"
                    />
                    <span className="font-bold text-sm w-[300px]">{item.product.title}</span>
                  </div>
                  <div className="flex flex-row gap-7 items-center mb-8">
                    <span className="text-sm font-normal text-color-lightgray">
                      ${item.product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center border rounded">
                      <button
                        className="p-2"
                      >
                        <img src={minus} alt="Decrease quantity" />
                      </button>
                      <span className="h-[39px] pt-2 px-2">{item.quantity}</span>
                      <button
                        className="p-2"
                      >
                        <img src={plus} alt="Increase quantity" />
                      </button>
                    </div>
                    <span className="text-sm font-normal text-color-lightgray">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button>
                      <img src={trash} alt="Remove item" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-bold border-t pt-2">
                <h2 className='font-normal text-base'>Shipping</h2>
                <p className='font-semibold	text-base'>Free</p>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span className='font-medium text-xl'>Total</span>
                <span className='font-medium text-xl'>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;