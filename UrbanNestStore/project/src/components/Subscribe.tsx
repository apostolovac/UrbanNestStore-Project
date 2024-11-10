import { useState } from 'react';
import { useStore } from '../store/useStore';

const Subscribe = () => {
  const [email, setEmail] = useState<string>();
  const saveSubscriptionEmail = useStore((state) => state.saveSubscriptionEmail);

  const handleSubscribe = () => {
    if (email) {
      saveSubscriptionEmail(email); 
      setEmail('');
    }
  };

  return (
    <section className="max-w-[1440px] h-[348px] lg:h-[200px] mx-auto px-3 lg:py-12 lg:px-40 flex flex-col justify-center lg:flex-row lg:items-center lg:justify-between gap-10 bg-color-grayish">
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl mb-2 text-center lg:text-left">Join Our Newsletter</h1>
        <p className="text-sm font-normal text-color-gray text-center lg:text-left">
          We love to surprise our subscribers with occasional gifts.
        </p>
      </div>

      <div className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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