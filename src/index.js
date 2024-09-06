// import  ('dotenv').config( './db');
import dotenv from 'dotenv';

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
});
connectDB();



























//we are using iffies 
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log("Error connecting to the server",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listning on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error(`Error: ${error.message}`)
//     }
// })()