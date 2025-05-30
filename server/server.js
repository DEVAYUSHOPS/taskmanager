require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
connectDB();
const app = express();
app.use(cors({
  origin: "https://ayushtaskmanagerapp.netlify.app",
  credentials: true, // only if using cookies/JWT in auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

// Use routes here
app.listen(process.env.PORT || 5000, () => console.log("Server running"));
