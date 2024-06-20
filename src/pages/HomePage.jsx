import React, { useEffect } from "react";
import Cards from "../components/cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, searchNews, setPage } from "../redux/newsSlice";
import Loader from "../components/loader";
import Selector from "../components/selector";
import SearchBar from "../components/searchBar";

const HomePage = () => {
  const dispatch = useDispatch();

  const { page, totalResults, category, status, error, query } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    if (query) {
      dispatch(searchNews({ query, page }));
    } else {
      dispatch(fetchNews({ category, page }));
    }
  }, [category, dispatch, page, query]);

  const handleOnChangePage = (newPage) => {
    window.scrollTo(0, 0);
    dispatch(setPage(newPage));
  };

  return (
    <div className=" py-20 md:max-w-screen-lg mx-auto px-4 lg:px-0">
      <div className=" grid grid-cols-2 md:grid-cols-10 gap-x-0 md:gap-x-4 gap-y-4 md:gap-y-0">
        <Selector />
        <SearchBar />
      </div>
      {status === "loading" && <Loader />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && (
        <>
          <Cards />

          <div className=" flex items-center justify-center mt-6 gap-x-4">
            <button
              className="h-10 px-4 py-2 font-bold bg-zinc-900 hover:bg-zinc-700 rounded-lg text-white disabled:bg-slate-300 disabled:text-zinc-900"
              onClick={() => handleOnChangePage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              className="h-10 px-4 py-2 font-bold bg-zinc-900 hover:bg-zinc-700 rounded-lg text-white disabled:bg-slate-300 disabled:text-zinc-900"
              onClick={() => handleOnChangePage(page + 1)}
              disabled={page >= Math.ceil(totalResults / 6)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
