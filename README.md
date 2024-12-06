# AI Image Generation App

A web application that allows users to generate, share and download AI-generated images using DALL-E API.

## Features

- Generate unique images using OpenAI's DALL-E API
- Share generated images with the community
- Browse and download images created by other users
- Responsive web design with modern UI/UX
- MongoDB integration for storing image data
- Image hosting via Cloudinary

## Prerequisites

Before running the application, make sure you have:
- Node.js installed
- NPM package manager
- MongoDB account
- OpenAI API key
- Cloudinary account

## Setup and Installation

### 1. Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
MONGODB_URL="your_mongodb_connection_string"
OPENAI_API_KEY="your_openai_api_key"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_secret"
```

### 2. Running the Backend

Navigate to the server directory and start the backend:

```bash
cd server
npm install
npm run start
```

### 3. Running the Frontend

In a new terminal, navigate to the client directory and start the frontend:

```bash
cd client
npm install
npm run dev
```

### 4. Accessing the Application

Once both servers are running, open your browser and navigate to the URL provided in the terminal (typically `http://localhost:5173`).

## Project Structure

- `/client` - React frontend application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Main application pages
  - `/src/utils` - Utility functions
- `/server` - Express backend application
  - `/mongodb` - Database models and connection
  - `/routes` - API endpoints

## Technologies Used

- Frontend: React, Tailwind CSS, Vite
- Backend: Express.js, Node.js
- Database: MongoDB
- Image Generation: DALL-E API
- Image Storage: Cloudinary

## License

This project is licensed under the MIT License - see the LICENSE file for details.
