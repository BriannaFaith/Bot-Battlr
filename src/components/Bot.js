import React from "react";
import "../App.css"

function Bot({ bot, enlistBot }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  function handleEnlistClick (){
    enlistBot(bot)
  }

  return (
    <div className="bot-card">
      <img className="bot-avatar" src={avatar_url} alt={name} />
      <div className="bot-details">
        <h3>{name}</h3>
        <p>Class: {bot_class}</p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Catchphrase: {catchphrase}</p>
      </div>
      <button onClick={handleEnlistClick}>Enlist</button>
    </div>
  );
}

export default Bot;
