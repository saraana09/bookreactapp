import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <div>
        <h1 className="row1">
          There is a no friend
          <br /> as loyal as a book.
        </h1>
        <h2 className="row2">Find Your Book</h2>
      </div>
      <div className="search">
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="search">Search Book:</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={props.handleChange}
          />
          <input type="submit" className="submitBtn" />
        </form>
      </div>
    </div>
  );
};

export default Home;
