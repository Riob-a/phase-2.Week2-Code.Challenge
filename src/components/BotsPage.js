import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from './Cards/BotSpecs';
// import SortBar from './SortBar';

function BotsPage() {
  const [botCollection, setBotCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [collectionVisible, setCollectionVisible] = useState(true);
  const [botSpecs, setBotSpecs] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/bots')
      .then(response => response.json())
      .then(bots => {

        setBotCollection(bots);
        setFilteredCollection(bots);
        console.log("Bots Fetched!");
        
      });
  }, []);

  function addToArmy(bot) {
    const newCollection = filteredCollection.filter(card => card.bot_class !== bot.bot_class);
    
    setFilteredCollection(newCollection);
    setBotArmy([...botArmy, bot]);
    setCollectionVisible(true);
  };

  function removeFromArmy (bot) {
    const newArmy = botArmy.filter(card => card.id !== bot.id);
    const armyClasses = newArmy.map(bot => bot.bot_class);
    const newCollection = botCollection.filter(bot => !armyClasses.includes(bot.bot_class));

    setBotArmy(newArmy);
    setFilteredCollection(newCollection);
  };

  function removeBotPermanently(bot) {
    const newCollection = botCollection.filter(card => card !== bot);
    const newFilteredCollection = filteredCollection.filter(card => card !== bot);
    const newArmy = botArmy.filter(card => card !== bot);

    setBotCollection(newCollection);
    setFilteredCollection(newFilteredCollection);
    setBotArmy(newArmy);

    fetch(`http://localhost:4000/bots/${bot.id}`, {

      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => response.json())
      .then(result => console.log(result));
  };

  function displayBotSpecs (bot){
    setCollectionVisible(false);
    setBotSpecs(bot);
  };

  function displayBotCollection(){
    setCollectionVisible(true);
  };

  return (
    <div>
      <YourBotArmy  bots={botArmy}  action={removeFromArmy}  removeBot={removeBotPermanently} />
      {collectionVisible
        ? <BotCollection
          botCollection={filteredCollection}  action={displayBotSpecs}  removeBot={removeBotPermanently} />

        : <BotSpecs
          bot={botSpecs}  back={displayBotCollection}  enlist={addToArmy} />
      }
    </div>
  );
}

export default BotsPage;
