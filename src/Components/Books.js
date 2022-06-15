import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Books = ({ books, dispatch }) => {
  return (
    <div className="container-fluid ">
      <Header header="Search result" />
      <div className="fav">
        {books?.items?.map((item, index) => (
          <Card key={index} bg="light">
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
        ))}
      </div>
    </div>
  );
};

export default Books;
