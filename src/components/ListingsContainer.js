import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard"; 
// thank u i didnt see u there, sneaky sneaky sneaky 

function ListingsContainer({gregData}) {


  return (
    <main>
      <ul className="cards">{
        gregData.map(card => {
          return <ListingCard key={card.id} gregs={card}/>
        })
      }
        
      </ul>
    </main>
  );
}

export default ListingsContainer;
 