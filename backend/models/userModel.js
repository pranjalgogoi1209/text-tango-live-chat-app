import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
    chats: [{
        name: { type: String, required: true },
        number: { type: Number, required: true },
        secondUserId : {type : String, required : true},
        chatId: { type: String, required: true },
        messages: [{
            send: { type: Boolean, required: true },
            message: { type: String, required: true },
            timeStamp: { type: Date, default: Date.now, required: true }
        }],
        lastMessage: { type: String },
        lastTime: { type: Number }
    }],
    groupChats: [{
        type: mongoose.Types.ObjectId, ref: "groupChat", required: true
    }]
}, { timestamps: true })

const userModel = new mongoose.model("user", userSchema);

export default userModel;