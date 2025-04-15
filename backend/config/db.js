import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://shreyamahajan:appy1234@cluster0.tey6v.mongodb.net/?retryWrites=true&w=majority&appName=cluster0').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error  mongodb+srv://ZaheerShaikh:Zaheer789@my-smart-order-app.whefx.mongodb.net/food-del.mongodb+srv://shreyamahajan:appy1234@cluster0.tey6v.mongodb.net/?retryWrites=true&w=majority&appName=cluster0