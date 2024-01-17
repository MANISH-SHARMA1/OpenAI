import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";

function Body() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Body;
