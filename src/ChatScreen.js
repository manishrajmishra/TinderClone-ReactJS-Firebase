import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Sarah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJ5Ysh_J7_lcGztBLeGTenezYaWt39DsrEg&usqp=CAU",
      message: "Yo whats up!"
    },
    {
      name: "Sarah",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJ5Ysh_J7_lcGztBLeGTenezYaWt39DsrEg&usqp=CAU",
      message: "How its going!"
    },
    {
      message: "I am good"
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You Matched with Sarah on 10/01/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message here.."
          type="text"
          className="chatScreen__inputField"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
