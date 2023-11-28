const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const authRoutes = require('./Routes/auth');
const notesRoutes = require('./Routes/notes');

const app = express();
const port = 5000;

connectToMongo();

// Use CORS middleware with options to allow requests from localhost
const corsOptions = {
  origin: 'http://localhost:3000',  // Replace with your frontend's localhost and port
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
