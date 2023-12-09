import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
    try {
        const db_options = {
            dbName: "texttango"
        }
        await mongoose.connect(DATABASE_URL, db_options);
        console.log(`server connected successfully...`);
    } catch (error) {
        console.log(`server connecting error : ${error}`);
    }
}

export default connectdb;