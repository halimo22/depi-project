import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import CategoryList from "./components/CategoryList";
import RecommendedMovies from "./components/RecommendedMovies";
import "./styles.css";

const moviesData = [
  { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010, length: "long", rating: 8.8, image: "https://via.placeholder.com/300x400" },
  { id: 2, title: "Titanic", genre: "Romance", year: 1997, length: "long", rating: 7.8, image: "https://via.placeholder.com/300x400" },
  { id: 3, title: "The Dark Knight", genre: "Action", year: 2008, length: "long", rating: 9.0, image: "https://via.placeholder.com/300x400" },
  { id: 4, title: "Dune", genre: "Sci-Fi", year: 2021, length: "long", rating: 8.5, image: "https://via.placeholder.com/300x400" }
];

const recommendedMovies = [
  { id: 5, title: "Interstellar", genre: "Sci-Fi", year: 2014, length: "long", rating: 8.6, image: "https://via.placeholder.com/300x400" },
  { id: 6, title: "Avatar", genre: "Sci-Fi", year: 2009, length: "long", rating: 7.9, image: "https://via.placeholder.com/300x400" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ category: "", releasePeriod: "all", length: "", sortBy: "title" });

  const filteredMovies = moviesData
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.category === "" || movie.genre === filters.category) &&
      (filters.length === "" || movie.length === filters.length) &&
      (filters.releasePeriod === "10" ? movie.year >= 2014 :
       filters.releasePeriod === "20" ? movie.year >= 2004 : true)
    )
    .sort((a, b) => {
      if (filters.sortBy === "title") return a.title.localeCompare(b.title);
      if (filters.sortBy === "year") return b.year - a.year;
      if (filters.sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="app">
      {/* Logo & Search Bar */}
      <header className="header">
        <img src="/logo.png" alt="Movie App Logo" className="logo" />
        <SearchBar setSearchTerm={setSearchTerm} />
        <Filters setFilters={setFilters} />
      </header>

      {/* Categories Section */}
      <CategoryList />

      {/* Recommended Movies Section */}
      <RecommendedMovies movies={recommendedMovies} />

      {/* Main Movie List */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
