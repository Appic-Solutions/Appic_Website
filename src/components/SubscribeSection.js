"use client"
import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    //condition to check if email is valid
    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email');
      return;
    }
    setEmail('');
    console.log('Subscribed with email:', email);
  };

  return (
    <section className=" text-white mb-20 rounded-3xl relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-center items-center ">
        <h2 className="title  font-bold  md:mb-0 pe-4">
         Subscribe to our newsletter
        </h2>
        {/* <p className="mb-6 md:mb-0 md:mr-8">
          Twice a month I share the best Tailwind templates, UI kits and components in my newsletter. 525 Tailwind hackers find it useful. I'd love you to join.
        </p> */}
        <form  className="flex w-4/12">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-lg flex-1 border-2 text-black focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-blue-800 rounded-r-lg px-6 font-semibold hover:bg-gray-200 transition-colors"
          >
            Try it
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
