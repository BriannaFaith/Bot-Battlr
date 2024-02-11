import React from "react";

function YourBotArmy({ army, releaseBot }) {
  return (
    <div className="your-bot-army">
      <h2>My Bot Army</h2>
      <div className="bot-collection">
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <img className="bot-avatar" src={bot.avatar_url} alt={bot.name} />
            <div className="bot-details">
              <h3>{bot.name}</h3>
              <p>Class: {bot.bot_class}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <button onClick={() => releaseBot(bot)}>Release</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
