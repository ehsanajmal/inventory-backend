const products = {};
const tables = require("../../../model/modelsIndex");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {validationResult} = require('express-validator');
const { product } = require("../../../model/mainModel");

products.validations = (req, res, result)=>{
        const errors = result(req);
        if(!errors.isEmpty()){
          return res.status(404).json({status:false, msg: "Validation Error Occured", data: errors });
        }
        return true;
}
products.addProduct = async(req,res)=>{
    try {
      products.validations(req, res, validationResult);
    const groupID = await tables.group.findByPk(req.body.groupID);
      if(!groupID){
        return res.status(404).json({status:false, msg: "groupID does not found,Please enter a valid groupID to create product", data: null });
      }
      const product = await tables.product.create(req.body)
      if(product){
        return res.status(200).json({status:true,msg: "New product created successfully", newProduct: product})
      }
    } catch (error) {
        return res.status(404).json({status:false,msg: "Something went wrong", error: error.message})
    }
}


products.viewAllProducts = async(req,res)=>{
  try {
      
      const products = await tables.product.findAll()
    
        return res.status(200).json({status:true,msg: "Product is created successfully", newProduct: products})
    } catch (error) {
        return res.status(404).json({status:false,msg: "Something went wrong", error: error.message})
    }
}

module.exports = products