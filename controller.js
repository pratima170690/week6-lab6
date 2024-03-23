const inventory = require("./model");

// get all inventorys
const getinventorys = async (req, res) => {
  const inventorys = await inventory.find({});
  res.status(200).json(inventorys);
};

// Add one inventory
const addinventory = async (req, res) => {
  const { name, description, quantity, price } = req.body;

  const newinventory = new inventory({ name, description, quantity, price });
  await newinventory.save();
  res.status(201).json(newinventory);
};

// Get inventory by ID
const getinventory = async (req, res) => {
  const { id } = req.params;

  const inventory = await inventory.findById(id);
  if (!inventory) {
    return res.status(404).json({ message: "inventory not found" });
  }
  res.status(200).json(inventory);
};

// Delete inventory by ID
const deleteinventory = async (req, res) => {
  const { id } = req.params;

  const inventory = await inventory.findByIdAndDelete({ _id: id });
  if (!inventory) {
    return res.status(404).json({ message: "inventory not found" });
  }
  res.status(200).json({ message: "inventory deleted successfully" });
};

// Delete all Books
const deleteAllinventorys = async (req, res) => {
  const result = await inventory.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} inventorys successfully` });
};

// Update inventory by ID
const updateinventory = async (req, res) => {
  const { id } = req.params;
  const updatedinventory = req.body;
  const inventory = await inventory.findOneAndUpdate({ _id: id }, updatedinventory);
  if (!inventory) {
    return res.status(404).json({ message: "inventory not found" });
  }
  res.status(200).json(inventory);
};

module.exports = {
  getinventorys,
  addinventory,
  getinventory,
  deleteinventory,
  deleteAllinventorys,
  updateinventory,
};