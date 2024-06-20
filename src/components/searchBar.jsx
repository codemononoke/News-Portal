import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNews, setQuery } from "../redux/newsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [q, setQ] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setQuery(q));
    dispatch(searchNews({ query: q, page: 1 }));
    setQ("");
  };

  return (
    <form
      className=" col-span-8 flex items-center gap-x-2"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        id="default-search"
        className="block w-full p-2.5 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-zinc-800 focus:border-zinc-800"
        placeholder="Search Mockups, Logos..."
        onChange={(e) => setQ(e.target.value)}
        required
      />
      <button
        className="h-10 px-4 py-2 text-slate-100 bg-zinc-900 hover:bg-zinc-700 rounded-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
