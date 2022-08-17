import React, {useState} from "react";

function ListingCard({gregs}) {
  
  const [favButt, setFavButt] = useState(true)
  function toggleFav() {
    setFavButt(isFav => !isFav)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={gregs.image} alt={gregs.description} />
      </div>
      <div className="details">
        <button className="emoji-button favorite"> onClick={toggleFav}
        {favButt 
        ? "★"
        : "☆"
        } 
        </button>
        <strong>{gregs.description}</strong>
        <span>{` · ${gregs.location}`}</span>

        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
 