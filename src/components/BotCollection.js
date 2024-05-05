import React from "react";
import BotCard from "./Cards/BotCard";

//function displays the bots
function BotCollection({botCollection, action, removeCard}){
    const displayBots = botCollection.map(bot => {
        return <BotCard bot={bot} action={action} removeCard={removeCard} />
      })
    return (
        <div className="ui four column grid">
            <div className="row align-items-start">
                {displayBots}
            </div>
        </div>
        
    )
}

export default BotCollection;
