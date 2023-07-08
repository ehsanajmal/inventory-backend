const Productstock = {};
const tables = require("../../../model/modelsIndex");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


Productstock.addStock = async(req,res)=>{
    try {
    const productID = await tables.product.findByPk(req.body.productID);
      if(!productID){
        return res.status(404).json({status:false, msg: "ProductID does not found,Please enter a valid ProductID to create stock", data: null });
      }
      const stock = await tables.stock.create(req.body)
      if(stock){
        return res.status(200).json({status:true,msg: "New Stock created successfully", newStock: stock})
      }
    } catch (error) {
        return res.status(404).json({status:false,msg: "Something went wrong", error: error.message})
    }
}


Productstock.viewAllStock = async(req,res)=>{
  try {
      
      const stocks = await tables.stock.findAll()
    
        return res.status(200).json({status:true,msg: "Product is created successfully", newProduct: products})
    } catch (error) {
        return res.status(404).json({status:false,msg: "Something went wrong", error: error.message})
    }
}

module.exports = Productstock