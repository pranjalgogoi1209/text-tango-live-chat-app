import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
    chats: [{
        name: { type: String, required: true },
        number: { type: Number, required: true },
        messages: [{
            status: { type: Boolean, required: true },
            message: { type: String, required: true },
            timeStamp: { type: Number, required: true }
        }],
        lastMessage: { type: String },
        lastTime: { type: Number }
    }],
    groupChats: [{
        type: mongoose.Types.ObjectId, ref: "groupChat", required: true
    }]
})

const userModel = new mongoose.model("user", userSchema);

export default userModel;