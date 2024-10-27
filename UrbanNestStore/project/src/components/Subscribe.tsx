import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const saveSubscriptionEmail = useAuthStore((state) => state.saveSubscriptionEmail);

  const handleSubscribe = () => {
    if (email) {
      saveSubscriptionEmail(email); // Save the email in Zustand
      setEmail(''); // Clear the input after saving
    }
  };

  return (
    <section className="max-w-[1440px] h-[200px] mx-auto py-12 px-40 flex items-center justify-between gap-10 bg-color-grayish">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl mb-2">Join Our Newsletter</h1>
        <p className="text-sm font-normal text-color-gray">
          We love to surprise our subscribers with occasional gifts.
        </p>
      </div>

      <div className="flex items-center">
        <input
          type="email"
          value={email} // Set input value to the state
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="border border-gray-300 rounded-l p-2 w-[320px] h-[45px] mr-4"
        />
        <button
          onClick={handleSubscribe}
          className="bg-color-blue text-white h-[44px] w-[116px] px-6 py-3 rounded font-medium text-sm"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;