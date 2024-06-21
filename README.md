# React News Portal
<p align="center">
  <img src="https://res.cloudinary.com/dmhfkaawt/image/upload/v1718948200/Capture_kzrpkb.png" alt="News Portal Image" width="100%">
</p>

## Overview

This is a responsive React application that displays news articles fetched from a public API. Users can filter articles based on categories and navigate through articles efficiently using pagination. Additionally, users can search for articles and save their favorite articles.

## Features

### Homepage Layout
- Displays a list of news articles with a title, image, and summary.
- Each article links to a detailed view.
- Responsive design that adapts to both desktop and mobile devices.

### Category Filtering
- Allows users to filter articles by categories (e.g., Business, Technology, Entertainment).
- The UI updates to display articles from the selected category.

### Pagination
- Pagination at the bottom of the homepage for navigating through different pages of articles.

### Detailed Article View Page
- Displays the full content of the article, including any media like images or videos, when a user clicks on an article summary from the homepage.

### API Integration
- Uses a public news API like [NewsAPI](https://github.com/codemononoke/news-api) to fetch news articles.
- Handles loading states and errors during API calls.

### State Management
- Uses React hooks for state management to handle user inputs, API responses, and application state.
- Uses Redux toolkit for state management.

### Advanced Features (Optional)
- Implemented a search feature to allow users to search for articles by keywords.
- Added a "favorites" feature where users can save articles, using local storage to persist the favorites between sessions.

## Dependencies

- React
- Redux Toolkit
- Axios
- React Router
- TailwindCSS (or any other CSS framework you used)

## Contact

For any inquiries, please reach out to:

- Name: Priyanshu Patil
- Email: priyanshup891@gmail.com
- GitHub: [codemononoke](https://github.com/codemononoke)
