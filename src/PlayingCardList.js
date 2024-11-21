import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import { useAxios } from './hooks';
import "./PlayingCardList.css";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";
/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(BASE_URL);

  const handleAddCard = async () => {
    await addCard();
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
        <button onClick={clearCards}>Clear all cards</button> 
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;