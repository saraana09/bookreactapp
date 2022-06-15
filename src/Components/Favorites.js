import React, { useContext } from "react";
import { FavoritesContext } from "../App";
import Header from "./Header";
import { Card, FloatingLabel, Form } from "react-bootstrap";
import Rating from "./Rating";

const Favorites = () => {
  const favorites = useContext(FavoritesContext);

  return (
    <div>
      <Header header="My list" />
      <div className="fav">
        {favorites?.map((item, index) => (
          <Card key={index}>
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
            <Rating />
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
