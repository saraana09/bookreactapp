import React, { useContext } from "react";
import { FavoritesContext } from "../App";
import { Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const Books = ({ books, dispatch }) => {
  const favorites = useContext(FavoritesContext);
  return (
    <div className="book">
      <h4>It is Books route</h4>
      {books?.items?.map((item) => (
        <Card>
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
          <Card.Text>{item.volumeInfo.description}</Card.Text>

          <Button
            type="button"
            onClick={() => dispatch({ type: "add_favorite", payload: books })}
          >
            Add to Favorite
          </Button>
        </Card>
        // <li key={item.id}>
        //   {" "}
        //   {item.volumeInfo.title} <br />
        //   <img
        //     src={
        //       item.volumeInfo.imageLinks !== undefined
        //         ? item.volumeInfo.imageLinks.thumbnail
        //         : ""
        //     }
        //     alt={item.title}
        //   />
        // </li>
      ))}
    </div>
  );
};

export default Books;
