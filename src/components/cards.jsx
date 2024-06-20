import React from "react";
import Card from "./card";
import { useSelector } from "react-redux";

const Cards = () => {
  const { article } = useSelector((state) => state.news);

  return (
    <div className=" mt-4 w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {article.map((news) => (
        <Card key={news?.title} news={news} />
      ))}
    </div>
  );
};

export default Cards;
