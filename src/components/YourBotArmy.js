import React from "react";
import BotCard from "./Cards/BotCard"

 function YourBotArmy(props) {
    const displayBots = props.bots.map(bot=> {
        return <BotCard bot={bot} action={props.action} removeBot={props.removeBot} />
    })
    return(
        <div className="ui segment  bot-army">
         <div className=" ui four column grid">
            <div className="row ">
                {displayBots}
            </div>
          </div>
        </div>
    )
}
export default YourBotArmy;