import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJ5Ysh_J7_lcGztBLeGTenezYaWt39DsrEg&usqp=CAU"
      />
      <Chat
        name="Ellen"
        message="Hie Bro"
        timestamp="55 seconds ago"
        profilePic="https://www.bitmoji.com/img/2a852af8.bfg-tiles.cache.png"
      />
      <Chat
        name="Sandra"
        message="I am in!"
        timestamp="4 day ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3A_6B2giuxZSukG4aS6mWVxx5ExoZjI8blg&usqp=CAU"
      />
      <Chat
        name="Natasha"
        message="Oops there is problem!"
        timestamp="5 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCFkrdtkcvrD2PTERggVkJZ48RUkCGXJKzVQ&usqp=CAU"
      />
    </div>
  );
};

export default Chats;
