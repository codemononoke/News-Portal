// src/redux/newsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const pageSize = 6; // Number of articles per page

// Async thunk to fetch news articles
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ category, page }) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=b61eb376835048cf8ff79d20f1dfd24f`
      );
      return {
        articles: response.data.articles,
        totalResults: response.data.totalResults,
      };
    } catch (error) {
      console.log("Something wrong with api.", error);
    }
  }
);

// Async thunk to search news articles
export const searchNews = createAsyncThunk(
  "news/searchNews",
  async ({ query, page }) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=b61eb376835048cf8ff79d20f1dfd24f`
      );
      return {
        articles: response.data.articles,
        totalResults: response.data.totalResults,
      };
    } catch (error) {
      console.log("Something wrong with api.", error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    article: [],
    articleDetail: null,
    favorite: JSON.parse(localStorage.getItem("favorites")) || [],
    totalResults: 0,
    category: "General",
    query: "",
    page: 1,
    status: "idle",
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1; // Reset to page 1 when category change
      state.query = "";
    },
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1; // Reset to page 1 when category change
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setArticleDetail: (state, action) => {
      state.articleDetail = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorite = [...state.favorite, action.payload];
      localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
    removeFormFavorites: (state, action) => {
      state.favorite = state.favorite.filter(
        (article) => article.url !== action.payload.url
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(searchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setCategory,
  setQuery,
  setPage,
  setArticleDetail,
  addToFavorites,
  removeFormFavorites,
} = newsSlice.actions;
export default newsSlice.reducer;
