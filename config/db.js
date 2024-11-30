import mongoose from "mongoose";
 export const connectDB =  async () => {
    await mongoose.connect('mongodb+srv://ajayprajapati06245:ajju9192@cluster0.swjjs.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}
