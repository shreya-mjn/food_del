import joi from "joi";
import mongoose from "mongoose";
// import { url } from "../../admin/src/assets/assets";

const foodSchema = new mongoose.Schema({
   
    name: { type: String, required: true },
    io: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true},
    image: { type:String, required: true },
    category:{ type:String, required:true},
    mood:{type:String, required:true},
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
export default foodModel;