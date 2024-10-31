import React from 'react';
import { useStore } from '../store/useStore';
import trash from "../assets/trash.png";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import checkout from "../assets/checkout.png";
import Navbar from './NavigationBar';
import Footer from './Footer';
import visa from "../assets/visa.png"
import mastercard from "../assets/mastercard.png"
import paypal from "../assets/paypal.png"

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity } = useStore();

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleIncreaseQuantity = (id: number, size: number, currentQuantity: number) => {
    updateQuantity(id, size, currentQuantity + 1);
  };

  const handleDecreaseQuantity = (id: number, size: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(id, size, currentQuantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between lg:flex-row p-4 my-8">
        <div>
          <h1 className='ml-8 flex flex-row items-center font-bold text-xl'>
            Cart
            {totalQuantity > 0 && (
              <span className="text-color-blue font-bold text-xl flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </h1>

          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex flex-col lg:flex-row items-center justify-between w-[326px] lg:w-[851px] lg:h-[70px] gap-[20px] lg:m-8 mt-8"
                >
                  <div className='flex flex-row items-center gap-6'>
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-[58px] h-[70px]"
                />
                <span className="font-bold text-sm w-[300px]">{item.product.title}</span>
                </div>
                <div className='flex flex-row gap-7 items-center mb-8'>
                
                <span className='text-sm font-normal text-color-lightgray'>
                  ${item.product.price.toFixed(2)}
                </span>

                <div className="flex items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(item.product.id, item.size, item.quantity)}
                    className="border-y border-l rounded-l p-2"
                  >
                    <img src={minus} alt="Decrease quantity" />
                  </button>
                  <span className="border-y h-[39px] pt-2 px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.product.id, item.size, item.quantity)}
                    className="border-y border-r rounded-r p-2"
                  >
                    <img src={plus} alt="Increase quantity" />
                  </button>
                </div>

                <span className='text-sm font-normal text-color-lightgray'>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
                <button onClick={() => removeItem(item.product.id, item.size)}>
                  <img src={trash} alt="Remove item" />
                </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col justify-between items-start w-[309px] h-[293px] mt-4 px-9 py-6 bg-color-grayish rounded-3xl">
          <h1 className="font-bold text-base">Order Summary</h1>

          <p className="flex justify-between w-full text-color-gray">
            Price
            <span className="font-normal text-sm text-color-black">
              ${totalPrice.toFixed(2)}
            </span>
          </p>

          <p className="flex justify-between w-full text-color-gray">
            Shipping
            <span className='font-normal text-sm text-color-black'>$0</span>
          </p>

          <p className="flex justify-between w-full text-color-gray">
            Tax
            <span className='font-normal text-sm text-color-black'>$0</span>
          </p>

          <p className="flex justify-between w-full border-t border-gray-400 pt-2 font-bold text-sm">
            Total Price
            <span>${totalPrice.toFixed(2)}</span>
          </p>

          <button className="mt-4 bg-color-blue text-white w-full h-[50px] flex flex-row justify-center items-center rounded-md uppercase">
            <img src={checkout} className='mr-2' alt="Checkout" />
            Checkout
          </button>
        </div>
      </div>

      <div className='flex flex-row items-center justify-end gap-6 border-b-2 border-gray-200 lg:h-[50px] lg:w-[1200px] my-9 mx-auto'>
        <img src={visa} alt="visa card" />
        <img src={mastercard} alt="mastercard" className='w-[38px] h-[30px]'/>
        <img src={paypal} alt="paypal" />
      </div>

      <Footer />
    </>
  );
};

export default Cart;