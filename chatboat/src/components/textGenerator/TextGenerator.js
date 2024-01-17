import React from "react";
import { CiChat1 } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

function TextGenerator() {
  const options = [
    {
      icon: <CiChat1 />,
      name: "Impact of AI on User Experiences",
    },
    {
      icon: <CiChat1 />,
      name: "Voice User Interfaces (VUI)",
    },
    {
      icon: <CiChat1 />,
      name: "Data-Driven UX",
    },
    {
      icon: <CiChat1 />,
      name: "Chatbots and Conversational AI",
    },
    {
      icon: <CiChat1 />,
      name: "Visual Recognition in UX",
    },
    {
      icon: <CiChat1 />,
      name: "Ethical AI Design",
    },
  ];

  return (
    <div className="bg-gray-950 px-5 ">
      <p className="text-white text-2xl">Text Generator</p>
      {options.map((data) => (
        <div className="flex items-center border-2  border-blue-100 hover:border-green-700 cursor-pointer text-blue-100 rounded-full gap-2 p-2 bg-gray-800 my-3">
          <p>{data.icon}</p>
          <p>{data.name}</p>
        </div>
      ))}

      <div className="mt-20">
        <div className="flex items-center border-2  border-green-700  text-green-700 rounded-full gap-2 p-2 bg-gray-950 my-3 cursor-pointer">
          <p>
            <GoPlusCircle />
          </p>
          <p>New Chat</p>
        </div>

        <div className="flex items-center border-2  border-red-700  text-red-700 rounded-full gap-2 p-2 bg-gray-950 my-3 cursor-pointer">
          <p>
            <MdOutlineCancel />
          </p>
          <p>Clear Conversation</p>
        </div>
      </div>
    </div>
  );
}

export default TextGenerator;
