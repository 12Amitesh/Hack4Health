import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';
import { router } from "./routes/route.js"
import { connectDB } from "./models/connection.js"

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware to handle CORS
app.use(cors()); // Enable CORS for all domains (for local development)
// app.use(bodyParser.json()); // Parse JSON data from requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: false }));
connectDB()
app.use(router);


// Start the server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
