const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getinventorys,
  addinventory,
  getinventory,
  updateinventory,
  deleteinventory,
  deleteAllinventorys,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all inventorys
app.get("/inventorys", getinventorys);

// POST a new inventory
app.post("/inventorys", addinventory);

// GET a single inventory
app.get("/inventorys/:id", getinventory);

// Update inventory using PUT
app.put("/inventorys/:id", updateinventory);

// DELETE a inventory
app.delete("/inventorys/:id", deleteinventory);

// DELETE all inventory
app.delete("/inventorys", deleteAllinventorys);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

