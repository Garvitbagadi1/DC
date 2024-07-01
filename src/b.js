import React, { useState } from "react";
import '../src/components/Boot.css'; // Import your custom CSS file
import "./components/boot.py";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  setInterval(highlightAll, 1000);

  // Function to highlight code using highlight.js library
  function highlightAll() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  function addMessage(message, isUserMessage) {
    const messageDiv = (
      <div
        className={`mt-3 p-3 rounded ${isUserMessage ? "user-message" : "bot-message"}`}
      >
        <img src="{{ url_for('static', filename='images/user.png') }" className="user-icon" alt="User Icon" />
        <p>{message}</p>
      </div>
    );

    setMessages((prevMessages) => [...prevMessages, messageDiv]);
  }

  function sendMessage() {
    const message = inputMessage.trim();

    if (message !== "") {
      addMessage(message, true);

      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
        .then((response) => response.json())
        .then((data) => {
          setInputMessage("");
          const content = data.content;

          const hasCodeBlock = content.includes("```");
          const messageDiv = (
            <div className={`mt-3 p-3 rounded bot-message`}>
              <img src="{{ url_for('static', filename='images/gpt.jpg') }" className="bot-icon" alt="Bot Icon" />
              {hasCodeBlock ? (
                <p dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <p>{content}</p>
              )}
            </div>
          );

          setMessages((prevMessages) => [...prevMessages, messageDiv]);
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="container mt-5">
      <h1 style={{ color: "white" }}>Chat Bot</h1>
      <div className="chat-box mt-3">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Type your message here"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatApp;
