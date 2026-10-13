const express = require("express");
const cors = require("cors");
const consentRoutes = require("./routes/consentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/consent", consentRoutes);

app.get("/", (req, res) => {
  res.send("Blockchain Healthcare Backend Running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
