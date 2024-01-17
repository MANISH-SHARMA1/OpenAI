import React from "react";
import TextGenerator from "../textGenerator/TextGenerator";
import ChatBox from "../chatBox/ChatBox";

function Main() {
  return (
    <div className="flex gap-1">
      <div className="hidden md:flex">
        <TextGenerator />
      </div>
      <div className="bg-gray-950 " style={{width: "80vw"}}>
        <ChatBox />
      </div>
    </div>
  );
}

export default Main;
