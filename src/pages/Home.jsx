import React from "react";
import Information from "../components/Information";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Landing />
      <Information />
    </div>
  );
};

export default Home;
