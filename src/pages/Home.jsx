import React from "react";

import CardsSlick from "../components/CardsSlick";

const Home = () => {
  return (
    <>
  
    <div className="ps-[6%]">
    <CardsSlick title="Popular" category={"popular"}/>
    <CardsSlick title="Top Rated" category={"top_rated"}/>
    <CardsSlick title="Upcoming" category={"upcoming"}/>
    </div>
    </>
  );
};

export default Home;
