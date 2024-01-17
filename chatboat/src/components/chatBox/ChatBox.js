import React, { useEffect, useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { MdOutlineMicNone } from "react-icons/md";
import { RiSendPlane2Line } from "react-icons/ri";
import { axiosClient } from "../../axios/axios";
import OpenAI from "openai";

function ChatBox() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

 

  // to get recent chat of the user
  async function getChat() {
    const resu = await axiosClient.post("chat/", {
      chatString: `${inputText}`,
      id: "65a74bbdda13f1a37648c372",
    });
   setResult(resu.data);
  }

  // to get recent chat from the OpenAI
  async function responseChat() {
    const responseResult = await axiosClient.post("responseChat/", {
      responseData: `${result}`,
      id: "65a79f6794f057a01a598754",
    });
    setInputText(responseResult.data)
  }

  // connect with OpenAI
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  async function fetchData() {
    try {
      getChat();
      const result = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `${inputText}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      setResult(result.choices[0].message.content);
      responseChat();
    } catch (error) {
      console.log("error from api: ", error);
    }
  }

  return (
    <>
      <div className="relative bg-gray-950 px-2 h-screen overflow-y-scroll hide">
        <div className="text-blue-100 py-2 px-5 bg-gray-800 md:max-w-md max-w-xs  float-end my-10 rounded-xl">
          {inputText}
        </div>
        <div className="text-blue-100 py-2 px-5 bg-gray-800 md:max-w-md max-w-xs float-start my-20 rounded-xl">
          {result}
        </div>

        {/* Write Message */}
        <div className="absolute bottom-32">
          <div className="fixed border-2 rounded-xl border-blue-100 bg-gray-950 text-blue-100 flex items-center  px-5 py-2 w-auto">
            <div className="flex items-center gap-2">
              <IoMdAttach className="text-xl cursor-pointer" />
              <input
                type="text"
                placeholder="Send a message"
                className="bg-gray-950 focus:outline-none p-1 w-96 text-md"
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-5 text-xl">
              <MdOutlineMicNone />
              <RiSendPlane2Line onClick={() => fetchData()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
