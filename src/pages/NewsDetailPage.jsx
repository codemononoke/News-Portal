import { ArrowLeft } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsDetailPage = () => {
  const { articleDetail } = useSelector((state) => state.news);

  return (
    <div className=" py-20 md:max-w-screen-lg mx-auto px-4 lg:px-0">
      <div className=" flex items-center">
        <Link to="/">
          <ArrowLeft className=" h-8 w-8 mr-4" />
        </Link>
        <h1 className=" text-xl md:text-3xl font-bold text-zinc-800">
          {articleDetail?.title}
        </h1>
      </div>
      <div className=" w-full overflow-hidden rounded-xl mt-4">
        <img
          src={articleDetail?.urlToImage ? articleDetail?.urlToImage :"https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"}
          alt={articleDetail?.title}
          className=" w-full h-full object-cover"
        />
      </div>
      <p className=" mt-4 text-md font-medium text-zinc-600">
        {articleDetail?.content}
      </p>
      <Link
        to={articleDetail?.url}
        className=" text-blue-700 text-lg font-semibold border-b-[2px] border-b-blue-700"
      >
        Source
      </Link>
    </div>
  );
};

export default NewsDetailPage;
