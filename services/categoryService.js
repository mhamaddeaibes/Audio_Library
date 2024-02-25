const Category = require('./models/categoryModel');

async function addCategory(categoryData) {
    try {
      const newCategory = new Category(categoryData);
  
      const savedCategory = await newCategory.save();
  
      return savedCategory;
    } catch (error) {
      throw new Error(`Error adding category: ${error.message}`);
    }
  }
  
  module.exports = {
    addCategory
  };
  