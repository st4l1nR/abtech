import mongoose from 'mongoose'

const connectDB = async () => {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Database connected");
      }
}

export default connectDB