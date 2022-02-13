const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
        type: {type: String, required:true, unique:true},
        description:{type:String, required:true},
        img:{type:String, required:true},
        catagories: {type:Array},
        quantity: {type:Int16Array, require: true},
        price: {type:String, required: true},
        isAdmin:{
            type:boolean,
            default: false,
        },
    },
        {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);