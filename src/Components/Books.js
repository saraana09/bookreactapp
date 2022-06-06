import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const Books = ({ books, dispatch }) => {
  return (
    <div className="book">
      <h4>Google Books Results</h4>
      {books?.items?.map((item, index) => (
        <Card key={index} className="card">
          <Card.Img
            src={
              item.volumeInfo.imageLinks !== undefined
                ? item.volumeInfo.imageLinks.thumbnail
                : ""
            }
            alt={item.title}
          />
          <div className="bottom">
            <Card.Title key={item.id}>{item.volumeInfo.title}</Card.Title>
            <Card.Body>{item.volumeInfo.authors}</Card.Body>
          </div>
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
