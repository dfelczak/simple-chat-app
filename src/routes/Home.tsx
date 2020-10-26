import React from 'react';

export const Home = () => {
  return (
    <div className="flex flex-col text-center w-full mb-20 justify-center">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Simple chat app</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hello there!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Just tap on the contact on the right side and this will allow you to send text messages to your friends
      </p>
    </div>
  );
};
