import React from "react"


function YourBotCard(props) {
  const { bot, action, removeBot } = props;

  function handleClick(event) {
    console.log("handleClick fired!")
    event.stopPropagation()
    action(bot)
  }

  function handleDelete(event) {
    console.log("Red X Clicked!")
    event.stopPropagation()
    removeBot(bot)
  }


  return (
  <div className="container col-2 p-2 m-3 bg-black rounded">
    <div className="card bg-warning"  key={props.bot.id} onClick={handleClick} >
          <img src={props.bot.avatar_url} className="card-img-top bg-info border border-black" alt="Oops"/>
      <div className="card-body">
          <h5 className="card-title">{props.bot.name}</h5>
           <p className="card-text">{props.bot.catchphrase}</p>
           <p className="card-text"> <b>Health:</b>{props.bot.health} <b>Damage:</b>{props.bot.damage} <b>Armor:</b>{props.bot.armor}</p> 
    
         <button className="btn btn-danger btn-lg float-end border border-black" onClick={handleDelete} ><b>X</b></button>
      </div>
    </div>
</div >
  );
}

export default YourBotCard;