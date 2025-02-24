## Overview

This is a **React-based Movie Recommendation App** that allows users to **browse, search, and filter movies** based on their preferences. The app features a **modern UI** with a **recommended movies section, category selection, and popular movies**.

## Features

- 🔍 **Search Bar** – Find movies by title.
- 🎬 **Recommended Movies** – Personalized movie recommendations.
- 🎭 **Categories Section** – Browse movies by category.
- 🔥 **Popular Movies Section** – Trending movies for quick discovery.
- 🎚 **Filters & Sorting** – Sort movies by title, release year, or rating.


## Installation

To set up the project locally, follow these steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo/movie-app.git
cd movie-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server (Frontend & Backend Together)

```bash
npm start  # Runs both frontend & backend using concurrently
```

The app will be available at **`http://localhost:3000/`**.

## Running Frontend & Backend Separately

If needed, you can start them manually:

### Start Frontend
```bash
npm run start-frontend  # Runs the frontend server inside movie-rag-frontend
```

### Start Backend
```bash
npm run start-backend  # Runs the backend server inside movie-rag-backend
```
## File Structure

```
MOVIE-RECOMMENDATION/
│── .venv/                         # Virtual environment
│── current-interfaces/            # Interface snapshots
│── Datasets/                      # Movie dataset storage
│── movie-rag-backend/             # Backend code (Node.js-based API)
│── movie-rag-frontend/            # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js
│   │   │   ├── Filters.js
│   │   │   ├── MovieList.js
│   │   │   ├── MovieCard.js
│   │   │   ├── CategoryList.js
│   │   │   ├── RecommendedMovies.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles.css
│── .gitignore                      # Git ignored files
│── Create-Wireframe.ipynb          # Notebook for wireframe generation
│── MovieDescriptionRetrieval.ipynb # Notebook for movie description retrieval
│── README.md                       # Project documentation
│── wireframe.png                    # Wireframe image reference
```

## Technologies Used

- **React** – Frontend framework
- **Node.js (Express.js)** – Backend API
- **Concurrently** – Running frontend & backend together
- **CSS** – Styling the UI
- **Matplotlib (Python)** – Wireframe design

## Future Enhancements

🚀 **Upcoming Features:**

- 🎞 **Movie API Integration** – Fetch real movie data from TMDb or OMDb.
- 🏆 **User Ratings & Reviews** – Let users rate and review movies.
- 📜 **Watchlist Feature** – Save favorite movies for later viewing.

