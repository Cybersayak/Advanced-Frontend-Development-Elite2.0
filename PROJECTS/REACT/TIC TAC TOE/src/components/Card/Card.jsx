import Icon from "../Icon/Icon"
import "./Card.css";

function Card({ index, onPlay , player})  {
  let icon = <Icon/>
  if (player === "Player B") {
    icon = <Icon name={"cross"} />
  } else if (player === "Player A") {
    icon = <Icon name={"circle"} />
  }


  return (
    <div className="card" onClick={() => onPlay(index)} >
      {icon}
    </div> 
  )
}   

export default Card
