import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  removeFormFavorites,
  setArticleDetail,
} from "../redux/newsSlice";
import { Heart } from "lucide-react";

const Card = ({ news }) => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.news);

  const isFavorite = favorite.some((fav) => fav.url === news.url);

  const handleSetArticleDetail = (article) => {
    dispatch(setArticleDetail(article));
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFormFavorites(news));
    } else {
      dispatch(addToFavorites(news));
    }
  };

  return (
    <div className=" w-full rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={
          news?.urlToImage
            ? news?.urlToImage
            : "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
        }
        alt={news?.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {news?.title ? news?.title : "No Title Available."}
        </div>
        <p className="text-gray-700 text-base">
          {news?.description ? news?.description : "No Description Available."}
        </p>
        <div className=" w-full flex items-center justify-between">
          <Link
            to={`/news/${news?.title}`}
            onClick={() => handleSetArticleDetail(news)}
          >
            <button className=" mt-4 h-10 px-4 py-2 font-bold bg-zinc-900 hover:bg-zinc-700 rounded-lg text-white disabled:bg-slate-300 disabled:text-zinc-900">
              Read More
            </button>
          </Link>
          <button onClick={handleToggleFavorite}>
            {isFavorite ? (
              <Heart className=" h-8 w-8 text-red-600 fill-red-600" />
            ) : (
              <Heart className=" h-8 w-8" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
