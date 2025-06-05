Book Management API
This project provides a simple RESTful API for managing a collection of books. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on book records stored in a JSON file. The API is built with Node.js and Express, demonstrating the Facade design pattern for better separation of concerns.

-----

Table of Contents
Features
Technologies Used
Project Structure
Getting Started
Prerequisites
Installation
Running the Application
API Endpoints
Design Pattern
Contributing
License
Features
Get All Books: Retrieve a list of all available books.
Get Book by ID: Fetch details of a specific book using its ID.
Add New Book: Create a new book entry.
Update Book: Modify existing book details.
Delete Book: Remove a book record.
Facade Pattern Implementation: Demonstrates a clean separation between the controllers and the underlying service logic.
Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
File System (fs) module: For reading and writing data to a JSON file (acting as a simple database).
Project Structure
.
├── controllers/
│   └── books.js           # Handles HTTP requests and responses
├── facades/
│   └── bookFacade.js      # Implements the Facade design pattern
├── routes/
│   └── book.js            # Defines API routes
├── services/
│   └── book.js            # Contains business logic and data access (file operations)
├── books.json             # Data storage (simple JSON file)
├── app.js                 # Main application file (server setup)
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have Node.js installed on your system.

Node.js
Installation
Clone the repository:
Bash

git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
Install dependencies:
Bash

npm install
Running the Application
To start the API server:

Bash

npm start
The API will be running on http://localhost:8000 (or whichever port you configure).

API Endpoints
The API interacts with the /books resource.

Method	Endpoint	Description	Request Body Example (for POST/PATCH)
GET	/books	Retrieves all books.	N/A
GET	/books/:id	Retrieves a book by its ID.	N/A
POST	/books	Adds a new book.	{ "id": 1, "title": "The Great Book", "author": "John Doe" }
PATCH	/books/:id	Updates an existing book by ID.	{ "author": "Jane Smith" }
DELETE	/books/:id	Deletes a book by its ID.	N/A

Exportar para as Planilhas
Design Pattern
This project implements the Facade design pattern.

The bookFacade.js acts as a simplified interface to the services/book.js subsystem.
Benefits:
Reduced Complexity: Controllers interact with a high-level facade instead of multiple, low-level service functions.
Decoupling: Changes in the underlying data access logic (e.g., switching from JSON files to a database) would primarily require modifications only within the services/book.js and facades/bookFacade.js, without affecting the controllers/books.js.
Improved Readability: The purpose of the controller actions becomes clearer as they call semantically meaningful methods on the facade.
Contributing
Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'feat: Add new feature').
Push to the branch (git push origin feature/your-feature-name).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details (if you have one, otherwise remove this section or specify another license).
