import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/card";

const FavoriteArticlePage = () => {
  const { favorite } = useSelector((state) => state.news);
  return (
    <div className=" py-20 md:max-w-screen-lg mx-auto px-4 lg:px-0">
      {favorite.length === 0 && (
        <div className=" flex items-center justify-center">
          <h1 className=" text-lg font-bold">No Favorite Article.</h1>
        </div>
      )}
      <div className=" mt-4 w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {favorite.map((news) => (
          <Card key={news?.title} news={news} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteArticlePage;
