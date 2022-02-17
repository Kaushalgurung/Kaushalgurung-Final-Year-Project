const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
        title: {type: String, required:true, unique:true},
        description:{type:String, required:true,},
        img:{type:String, required:true},
        catagories: {type:Array},
        quantity: {type:Number, require: true},
        price: {type:String, required: true},
        
    },
        {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);