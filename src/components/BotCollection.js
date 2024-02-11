import React from "react";
import Bot from "./Bot";

function BotCollection({ bots }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <Bot key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;