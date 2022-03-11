const mongoose = require("mongoose")

/* Creating a new schema for the product. */
const ProductSchema = new mongoose.Schema({
        title: {type: String, required:true, unique:true},
        description:{type:String, required:true,},
        img:{type:String, required:true},
        catagories: {type:Array},
        use: {type: String, default: "null"},
        price: {type:Number, required: true},
    },
        {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);