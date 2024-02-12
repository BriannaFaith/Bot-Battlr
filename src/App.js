import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import "./App.css";
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [sortBy, setSortBy] = useState('health');

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then(data => setBots(data.bots || data))
      .catch(error => console.error(error));
  }, []);

  function deleteBot(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error deleting bot');
        }
        setArmy(prevArmy => prevArmy.filter(bot => bot.id !== botId));
      })
      .catch(error => {
        console.error('Error deleting bot:', error);
      });
  }

  function enlistBot(bot) {
    if (!army.find(b => b.id === bot.id)) {
      setArmy(prevArmy => [...prevArmy, bot]);
    }
  }

  function releaseBot(removeBot) {
    const updatedArmy = army.filter(bot => bot.id !== removeBot.id);
    setArmy(updatedArmy);
  }
  function handleSortBy(criteria) {
    setSortBy(criteria);
  }
  function sortBots() {
    let sortedBots;

    if (sortBy === 'health') {
      sortedBots = [...bots].sort((a, b) => b.health - a.health);
    } else if (sortBy === 'damage') {
      sortedBots = [...bots].sort((a, b) => b.damage - a.damage);
    } else if (sortBy === 'armor') {
      sortedBots = [...bots].sort((a, b) => b.armor - a.armor);
    } else {
      sortedBots = bots;
    }

    return sortedBots;
  }

  return (
    <>
      <h1>Welcome to my Bot Collection</h1>
      <YourBotArmy army={army} releaseBot={releaseBot} deleteBot={deleteBot} />
      <h2>All Available Bots</h2>
      <SortBar onSortBy={handleSortBy} />
      <BotCollection bots={sortBots()} enlistBot={enlistBot} />
    </>
  );
}

export default App;
