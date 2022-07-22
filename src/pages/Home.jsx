import React from "react";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="home">
      {/* <Nav /> */}
      <Landing />
      <Information />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
