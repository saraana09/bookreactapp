import React, { useContext } from "react";
import { FavoritesContext } from "../App";
import { Card } from "react-bootstrap";

const Favorites = () => {
  const favorites = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <div>
      <h3>Favorites</h3>
      {favorites?.map((item, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              item.volumeInfo.imageLinks !== undefined
                ? item.volumeInfo.imageLinks.thumbnail
                : ""
            }
            alt={item.title}
          />
          <Card.Title key={item.id}>{item.volumeInfo.title}</Card.Title>
          <Card.Text>{item.volumeInfo.authors}</Card.Text>
        </Card>
      ))}
    </div>
  );
};

export default Favorites;
