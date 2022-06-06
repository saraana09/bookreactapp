import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <div className="row1">
        <h2>Find Your Book</h2>
        <div className="search">
          <form onSubmit={props.handleSubmit}>
            <input
              className="input1"
              type="text"
              id="search"
              name="search"
              onChange={props.handleChange}
            />
            <input type="submit" className="submitBtn" />
          </form>
        </div>
        <div className="row2">
          <h1>
            There is a no friend
            <br /> as loyal as a book.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
