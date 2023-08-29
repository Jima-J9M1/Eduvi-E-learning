import React from 'react';
import {useState} from 'react';

const SubscriptionBox: React.FC = () => {
  const [inputClicked, setInputClicked] = useState(false);

  const handleInputClick = () => {
    setInputClicked(true);
  };

  const handleInputBlur = () => {
    setInputClicked(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-8 lg:px-16 my-8 h-80  bg-[#0A033C]
     text-white rounded-lg flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-4xl max-w-prose font-bold leading-14  ">
          Subscribe to get updates
          <br />
          every new course
        </p>
      </div>
      <div className="text-center mt-4">
      <p className="font-light text-sm leading-6 text-white opacity-40 max-w-prose mx-auto  tracking-tighter">
          20k+ students daily learn with Eduvi, subscribe for new courses.
        </p>
      </div>
      <div className="flex flex-row justify-center mt-8">
        <input
          type="email"
          className={`w-full sm:w-auto h-10 px-4 py-2 rounded-l-lg rounded-bl-lg  bg-[#0A033C]
          bg-opacity-10 
          
          mb-2 sm:mb-0`}
          placeholder="enter your email"
          style={{ fontStyle: "italic", overflow: "hidden",
          background: "#6B6B6B", }}
          onClick={handleInputClick}
          onBlur={handleInputBlur}
        />
        <button className="w-full text-small px-4 sm:w-auto h-10 bg-indigo-700 text-white rounded-r-lg rounded-br-lg" >
          Subscribe
        </button>
      </div>
       
    </div>
  );
};

export default SubscriptionBox;














