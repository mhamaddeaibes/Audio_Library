const { addCategory } = require('./categoryService');

async function createCategory(req, res) {
    try {
      const { name, description } = req.body;
  
      const categoryData = { name, description };
  
      const newCategory = await addCategory(categoryData);

      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports = {
    createCategory
  };