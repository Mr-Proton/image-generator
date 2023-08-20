import React from "react";
import { useState } from "react";
import "../CSS/chat.css";

function Chat() {
  const genHistory = []
  const promptHistory = []
  const [comment, setComment] = useState("");
  const [genTexts, setGenTexts] = useState("");
  const [oldPrompt, setOldPrompt] = useState("");
  
  const getComment = (event) => {
    setComment(event.target.value);
  };

  const API_TOKEN = "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";
  const GPT_Key = "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"


  async function getText() {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stablecode-instruct-alpha-3b",
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: "POST",
        body: JSON.stringify(comment),
      }
    );
    const result = await response.json();
    //setGenTexts(result[0].generated_text);
    console.log(result);
    setOldPrompt(comment);
    setComment("");
  }
  return (
    <div className="chat-section">
      <div className="chat-history">
        <div className="old-prompts">
          {oldPrompt ? <><div className="user-prompt">{oldPrompt}</div><h6 className="you-text">You</h6></> : <></>}
          {genTexts ? <><div className="gen-text">{genTexts}</div><h6 className="ai-user">AI</h6></> : <></>}
        </div>
        <div className="chat-inputs">
          <input
            type="text"
            name="prompt"
            placeholder="Enter your prompt"
            onChange={getComment}
            value={comment}
          />
          <button onClick={getText}>➤</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
