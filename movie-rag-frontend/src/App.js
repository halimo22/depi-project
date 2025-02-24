import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import CategoryList from "./components/CategoryList";
import "./styles.css";

const recommendedMovies = [
  { id: 1, title: "Movie 1", image: "movie1.jpg", category: "Action" },
  { id: 2, title: "Movie 2", image: "movie2.jpg", category: "Sci-Fi" },
  { id: 3, title: "Movie 3", image: "movie3.jpg", category: "Romance" },
];

const categories = [
  { id: 1, name: "Category 1", image: "category1.jpg" },
  { id: 2, name: "Category 2", image: "category2.jpg" },
  { id: 3, name: "Category 3", image: "category3.jpg" },
  { id: 4, name: "Category 4", image: "category4.jpg" },
];

const popularMovies = [
  { id: 4, title: "Movie 4", image: "movie4.jpg", category: "Action" },
  { id: 5, title: "Movie 5", image: "movie5.jpg", category: "Drama" },
  { id: 6, title: "Movie 6", image: "movie6.jpg", category: "Horror" },
];

function App() {
  const [filters, setFilters] = useState({ category: "", releasePeriod: "all", length: "", sortBy: "title" });

  const filteredMovies = popularMovies.filter((movie) =>
    filters.category ? movie.category === filters.category : true
  );

  return (
    <div className="app">
      {/* Search Bar & Filter Button */}
      <header className="header">
        <SearchBar />
        <Filters setFilters={setFilters} />
      </header>

      {/* Recommended Movies */}
      <section className="movie-section">
        <h2>Recommended for You</h2>
        <MovieList movies={recommendedMovies} />
      </section>

      {/* Categories */}
      <section className="category-section">
        <h2>Categories</h2>
        <CategoryList categories={categories} />
      </section>

      {/* Popular Movies */}
      <section className="movie-section">
        <h2>Popular Movies</h2>
        <MovieList movies={filteredMovies} />
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button>Home</button>
        <button>Browse</button>
        <button>Profile</button>
      </nav>
    </div>
  );
}

export default App;
