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
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <>
    <h1>Welcome to my Bot Collection</h1>
    <BotCollection bots={bots} />
    </>
  )
}

export default App;
