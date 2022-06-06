import React, { useContext } from "react";
import { FavoritesContext } from "../App";
import { Card, FloatingLabel, Form } from "react-bootstrap";

const Favorites = () => {
  const favorites = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <div className="fav">
      <h1>My Favorites</h1>
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
  );
};

export default Favorites;
