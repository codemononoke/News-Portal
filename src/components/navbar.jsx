import { Github, Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className=" md:max-w-screen-lg mx-auto flex items-center w-full justify-between">
        <Link to="/">
          <h1 className=" text-xl font-bold">News Portal</h1>
        </Link>
        <div className=" flex items-center gap-x-4">
          <Link to="/favorite">
            <button className="h-10 px-4 py-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg">
              <Heart className=" h-4 w-4 text-slate-50" />
            </button>
          </Link>
          <Link
            to="https://github.com/codemononoke/News-Portal"
            target="_blank"
          >
            <button className="h-10 px-4 py-2 bg-zinc-900 hover:bg-zinc-700 rounded-lg">
              <Github className=" h-4 w-4 text-slate-50" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
