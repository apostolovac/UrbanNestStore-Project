import React, { useState } from "react";
import slider from "../assets/slider.png";
import adress from "../assets/adress.png";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import { Link } from "react-router-dom";
import shoparrow from "../assets/shoparrow.png"
import Navbar from "./NavigationBar";
import Footer from "./Footer";
import ServiceSection from "./ServiceSection";
import { useAuthStore } from "../store/useAuthStore";

const ContactUs: React.FC = () => {
    const { saveContactForm } = useAuthStore();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      saveContactForm(name, email, message);
      // Reset the form fields
      setName("");
      setEmail("");
      setMessage("");
    };

  return (
<>
<Navbar/>
      <div className="flex flex-col items-center overflow-x-hidden mt-10">

        <div className="flex flex-col items-start justify-between w-full max-w-[1121px] h-[276px] gap-6">
          <h1 className="text-5xl font-medium max-w-[910px] h-[78px]">
            We believe in sustainable fashion. We're passionate about style that empowers you.
          </h1>
          <p className="text-start text-base font-normal max-w-[834px] h-[78px] mb-6">
            Our collection features timeless fashion, with natural fabrics, elegant silhouettes, and classic designs that can elevate any wardrobe. Each piece enchants with its sophistication, made to last for generations, blending the essence of past eras with a modern touch.
          </p>
        </div>

        <div className="flex items-center w-full max-w-[1119px] h-[413px] gap-0">
          <img src={slider} alt="Contact Us" className="w-1/2 h-full object-cover" />
          <div className="flex flex-col justify-center flex-1 p-8 bg-color-grayish h-[413px]">
            <div className="w-[452] h-[164] m-4">
            <h1 className="font-medium text-4xl mb-4">About Us</h1>
            <p className="font-normal text-base mb-6">
            UrbanNest is a fashion store based in Struga, Macedonia. Established in 2024, by Nikola Ristoski. <br/>Our dedicated customer service team is always ready to support you 24/7.
            </p>
            </div>
            <Link
              to="/home"
              className="ml-4 text-color-black border-b border-black text-base font-medium flex items-center w-32">
              Shop Now <img src={shoparrow} className="ml-2" alt="arrow" />
            </Link>

          </div>
        </div>

        <div className="flex flex-col items-center w-full max-w-[1120px] h-auto gap-10">
          <h1 className="text-4xl font-medium mt-10">Contact Us</h1>
          <div className="flex flex-row justify-between w-full h-auto">

            <div className="bg-color-grayish p-4 flex-1 min-w-[250px] h-[130px] flex flex-col items-center justify-between mx-2">
              <img src={adress} alt="Card 1" className="w-[32px] h-[32px]" />
              <h1 className="text-base font-bold text-color-gray uppercase">Address</h1>
              <p className="text-base font-semibold uppercase">Struga, Macedonia</p>
            </div>

            <div className="bg-color-grayish p-4 flex-1 min-w-[250px] h-[130px] flex flex-col items-center justify-between mx-2">
              <img src={call} alt="Card 2" className="w-[32px] h-[32px]" />
              <h1 className="text-base font-bold text-color-gray uppercase">Contact Us</h1>
              <p className="text-base font-semibold uppercase">+38970712526</p>
            </div>

            <div className="bg-color-grayish p-4 flex-1 min-w-[250px] h-[130px] flex flex-col items-center justify-between mx-2">
              <img src={mail} alt="Card 3" className="w-[32px] h-[32px]" />
              <h1 className="text-base font-bold text-color-gray uppercase">Email</h1>
              <p className="text-base font-semibold uppercase">support@urbannest.com</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col w-full max-w-[1120px] h-auto gap-6 mt-20" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-1 text-xs font-bold uppercase text-color-gray" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="border rounded-md p-2"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="mb-1 text-xs font-bold uppercase text-color-gray" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="border rounded-md p-2"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="mb-1 text-xs font-bold uppercase text-color-gray" htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="border rounded-md p-2"
              rows={4}
            />
          </div>
          
          <button className="mt-4 mb-20 px-4 py-2 bg-color-blue text-white rounded-lg text-base font-medium">
            Send Message
          </button>
        </form>
      </div>
      <ServiceSection/>
      <Footer/>
    </>
  );
};

export default ContactUs;