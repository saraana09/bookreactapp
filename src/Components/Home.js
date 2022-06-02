import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search">Search Book:</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={props.handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
