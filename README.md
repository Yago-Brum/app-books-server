# Book Management API

This project provides a simple RESTful API for managing a collection of books. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on book records stored in a JSON file. The API is built with Node.js and Express, demonstrating the **Facade design pattern** for better separation of concerns.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Design Pattern](#design-pattern)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Get All Books**: Retrieve a list of all available books.
- **Get Book by ID**: Fetch details of a specific book using its ID.
- **Add New Book**: Create a new book entry.
- **Update Book**: Modify existing book details.
- **Delete Book**: Remove a book record.
- **Facade Pattern Implementation**: Demonstrates a clean separation between the controllers and the underlying service logic.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **File System (fs) module**: For reading and writing data to a JSON file (acting as a simple database).

---

## Project Structure
