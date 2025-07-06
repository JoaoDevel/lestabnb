import React from "react";
import Card from "../components/card";

const Home = () => {
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-4 p-8 max-w-7xl mx-auto ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Home;
