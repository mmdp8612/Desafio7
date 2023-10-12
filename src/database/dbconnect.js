import { config } from "dotenv";
import mongoose from "mongoose";

config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión a la base de datos establecida en', process.env.MONGO_DB);
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
    }
};

