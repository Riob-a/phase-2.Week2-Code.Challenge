import React, { useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom";

function BotSpecs(props) {

  
    return (
    <div className="container col-4 p-2 m-3 bg-black rounded  ">
    <div className="card bg-warning">
      <img src={bot.avatar_url} class="card-img-top bg-info  border border-black" alt="Oops"/>
      <div class="card-body">
        <h5 class="card-title">{bot.name}</h5>
        <p class="card-text"> <b>Catchphrase: </b>{bot.catchphrase}</p>
        <p class="card-text"> <b>Class: </b>{bot.bot_class} </p>
        <p class="card-text"> <b>Health: </b>{props.bot.health} <b>Damage: </b>{props.bot.damage} <b>Armor: </b>{props.bot.armor}</p> 
    
        <button class="btn btn-primary mx-auto border border-black" onClick={() => props.back()}>Go Back</button>
        
        <button class="btn btn-success mx-auto float-end border border-black" onClick={() => props.enlist(bot)}>Enlist</button>
      </div>
    </div>
    </div>
    );
  }

export default BotSpecs;

