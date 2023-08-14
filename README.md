# Ecommerce Store API using Express.js and MySQL

This project is an API for managing products in an Ecommerce store, built using Express.js and MySQL.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project serves as an API backend for an Ecommerce store, allowing you to perform CRUD operations (Create, Read, Update, Delete) on products. It uses Express.js as the web framework and connects to a MySQL database.

## Features

- Create a new product
- Retrieve a list of all products
- Retrieve a single product by ID
- Update product information
- Delete a product

## Prerequisites

- Node.js (at least version 12)
- MySQL database

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-store-express.git
Install dependencies:

bash
Copy code
cd ecommerce-store-express
npm install
Set up your MySQL database and configure the connection settings in config/database.js.

Run the application:

bash
Copy code
npm start
The API will be accessible at http://localhost:3000.

API Endpoints
GET /products: Retrieve a list of all products.
GET /products/:id: Retrieve a single product by ID.
POST /products: Create a new product.
PUT /products/:id: Update product information by ID.
DELETE /products/:id: Delete a product by ID.
Technologies Used
Express.js: Web framework for building the API.
MySQL: Database for storing product information.
Sequelize: ORM for interacting with the MySQL database.
Body-parser: Middleware for parsing incoming request bodies.
CORS: Middleware for enabling Cross-Origin Resource Sharing.
Contributing
Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
