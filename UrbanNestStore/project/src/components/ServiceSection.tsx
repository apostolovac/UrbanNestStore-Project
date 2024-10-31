import React from 'react';
import delivery from '../assets/delivery.png';
import payment from '../assets/payment.png';
import lock from '../assets/lock.png';
import call from '../assets/call.png';

const ServiceSection: React.FC = () => {
  return (
    <section className="max-w-[1120px] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="w-[152px] h-[202px] lg:w-[262px] lg:h-[220px] py-12 px-2 lg:px-8 flex flex-col items-start bg-color-grayish">
        <img src={delivery} alt="Free Shipping" className="mb-4 pt-2" />
        <h1 className="text-xl font-medium">Free Shipping</h1>
        <p className="text-sm font-normal text-color-gray pt-3">Order above $150</p>
      </div>

      <div className="w-[152px] h-[202px] lg:w-[262px] lg:h-[220px] py-12 px-2 lg:px-8 flex flex-col items-start bg-gray-100">
        <img src={payment} alt="Money-back Guarantee" className="mb-4" />
        <h1 className="text-xl font-medium">Money-back</h1>
        <p className="text-sm font-normal text-color-gray pt-3">30 days guarantee</p>
      </div>

      <div className="w-[152px] h-[202px] lg:w-[262px] lg:h-[220px] py-12 px-2 lg:px-8 flex flex-col items-start bg-gray-100">
        <img src={lock} alt="Secure Payments" className="mb-4" />
        <h1 className="text-xl font-medium">Secure Payments</h1>
        <p className="text-sm font-normal text-color-gray pt-3">Secured by Stripe</p>
      </div>

      <div className="w-[152px] h-[202px] lg:w-[262px] lg:h-[220px] py-9 px-2 lg:px-8 flex flex-col items-start bg-gray-100">
        <img src={call} alt="24/7 Support" className="mb-4" />
        <h1 className="text-xl font-medium">24/7 Support</h1>
        <p className="text-sm font-normal text-color-gray pt-3">Phone and Email support</p>
      </div>
    </section>
  );
};

export default ServiceSection;