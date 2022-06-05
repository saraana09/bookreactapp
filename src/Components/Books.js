import React, { useContext } from "react";
import { FavoritesContext } from "../App";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Books = ({ books, dispatch }) => {
  const favorites = useContext(FavoritesContext);
  return (
    <div className="book">
      <h4>Google Books Result</h4>
      {books?.items?.map((item, index) => (
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
          <Button
            type="button"
            onClick={() => dispatch({ type: "add_favorite", payload: item })}
          >
            Add to Favorite
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Books;
