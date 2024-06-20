import React from "react";
import { setCategory } from "../redux/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  "General",
  "Business",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Selector = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.news);

  const handleOnChangeCategory = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  return (
    <select
      id="categories"
      className=" col-span-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-900 focus:border-zinc-900  w-full p-2.5"
      onChange={(e) => handleOnChangeCategory(e.target.value)}
      defaultValue={category}
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Selector;
