const groupController = {};
const tables = require("../../../model/modelsIndex");
const {validationResult} = require('express-validator');

groupController.validations = (req, res, result)=>{
        const errors = result(req);
        if(!errors.isEmpty()){
          return res.status(404).json({status:false, msg: "Validation Error Occured", data: errors });
        }
        return true;
}

groupController.addGroup = async(req,res)=>{
    try {
        groupController.validations(req, res, validationResult);
        const group = await tables.group.create(req.body)
        if(group){
          return res.status(200).json({status:true,msg: "Group is created successfully", newGroup: group})
        }
      } catch (error) {
          return res.status(404).json({status:false,msg: "Something went wrong", error: error.message})
      }
  }

  groupController.viewAllGroups = async(req,res)=>{
    try {
        
        const groups = await tables.group.findAll()
      
          return res.status(200).json({status:true,msg: "Group is created successfully", newGroup: groups})
   
      } catch (error) {
          return res.status(404).json({status:false,msg: "Something went wrong", error: error.message})
      }
  }
  
  
module.exports = groupController