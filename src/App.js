import React,{ useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import "./App.css";
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching data ...");
        }
        return response.json();
      })
      .then(data => setBots(data.bots || data))
      .catch(error => console.error(error));
  }, []);

  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  return (
    <>
    <h1>Welcome to my Bot Collection</h1>
    <YourBotArmy bots={bots} army={army} />
    <BotCollection bots={bots} enlistBot={enlistBot}/>
    
    </>
  )
}

export default App;
