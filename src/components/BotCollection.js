import React from "react";
import Bot from "./Bot";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <Bot key={bot.id} bot={bot} enlistBot={enlistBot} />
      ))}
    </div>
  );
}

export default BotCollection;