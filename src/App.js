// src/App.js
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import NewsDetailPage from "./pages/NewsDetailPage";
import FavoriteArticlePage from "./pages/FavoriteArticlePage";

function App() {
  return (
    <div className=" h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="/favorite" element={<FavoriteArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
