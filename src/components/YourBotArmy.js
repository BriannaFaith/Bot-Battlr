import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army }) {
  return (
    <div className="your-bot-army">
      <h2>My Bot Army</h2>
      <div className="bot-collection">
        {army.map(bot => (
          <Bot key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
