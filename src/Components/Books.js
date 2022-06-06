import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const Books = ({ books, dispatch }) => {
  return (
    <div className="fav">
      <h1>Google Book Results</h1>
      {books?.items?.map((item, index) => (
        <Container>
          <Card key={index}>
            <Card.Img
              src={
                item.volumeInfo.imageLinks !== undefined
                  ? item.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              alt={item.title}
            />
            <div>
              <Card.Title key={item.id}>{item.volumeInfo.title}</Card.Title>
              <Card.Body>{item.volumeInfo.authors}</Card.Body>
            </div>
            <Button
              type="button"
              onClick={() => dispatch({ type: "add_favorite", payload: item })}
            >
              Add to My Books
            </Button>
          </Card>
        </Container>
      ))}
    </div>
  );
};

export default Books;
