import React from "react"
// import { useParams, useNavigate } from "react-router-dom";

function BotSpecs(props) {
    const bot = props.bot;
  
  
    return (
    <div className="container col-4 p-2 m-3 bg-black rounded  ">
    <div className="card bg-warning">
      <img src={bot.avatar_url} className="card-img-top bg-info  border border-black" alt="Oops"/>
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text"> <b>Catchphrase: </b>{bot.catchphrase}</p>
        <p className="card-text"> <b>Class: </b>{bot.bot_class} </p>
        <p className="card-text"> <b>Health: </b>{props.bot.health} <b>Damage: </b>{props.bot.damage} <b>Armor: </b>{props.bot.armor}</p> 
    
        <button className="btn btn-primary mx-auto" onClick={() => props.back()}>Go Back</button>
        
        <button className="btn btn-success mx-auto float-end " onClick={() => props.enlist(bot)}>Enlist</button>
      </div>
    </div>
    </div>
    );
  }

export default BotSpecs;

