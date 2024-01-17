import React, { useState } from "react";
import { axiosClient } from "./axios/axios";

function ApiCall() {
  const [text, setText] = useState("");

  async function fetchData() {
    try {
      const result = await axiosClient.post("/chat/completions", {
        messages: [
          {
            role: "user",
            content: `${text}`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      console.log("input text: ", text);
      console.log("result from gpt: ", result);
      console.log(
        "result after sorting: ",
        result.data.choices[0].message.content
      );
    } catch (error) {
      console.log("error from api: ", error);
    }
  }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div>
      <p>Rendered</p>
      <input
        type="text"
        placeholder="write something"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={fetchData}>Submit</button>
      {/* <input type="button" placeholder="button" onClick={fetchData()} /> */}
    </div>
  );
}

export default ApiCall;


