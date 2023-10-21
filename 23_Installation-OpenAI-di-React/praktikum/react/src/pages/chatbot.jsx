import React, { useState, useEffect } from "react";
import { OpenAIApi } from "openai";
import { Link } from "react-router-dom";

const ChatBot = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  // Fungsi untuk mengirim permintaan ke OpenAI
  const sendRequestToOpenAI = async () => {
    const openai = new OpenAIApi({
      apiKey: "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",
    });

    try {
      const result = await openai.createCompletion({
        engine: "davinci",
        prompt: inputText,
        max_tokens: 50, // Jumlah token maksimum dalam respons
      });

      setResponse(result.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequestToOpenAI();
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Submit</button>
      </form>
      <div className="response">{response}</div>
    </div>
  );
};

export default ChatBot;