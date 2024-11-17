import mongoose from 'mongoose'
import { DB_URL } from './serverConfig.js';

async function connectDB() {
    try {
        await mongoose.connect( DB_URL );
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log("Something went wrong while connecting to MongoDB");
        console.log(error); 
        process.exit(1);     
    }
};

export default connectDB;