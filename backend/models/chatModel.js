import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    user1Id:  { type: mongoose.Types.ObjectId, ref: "chat", required: true } ,
    user2Id:  { type: mongoose.Types.ObjectId, ref: "chat", required: true } ,
    user1number: { type: Number, required: true},
    user2number: { type: Number, required: true},
    messages: [{
        send: { type: Boolean, required: true },
        message: { type: String, required: true },
        timeStamp: { type: Date, default: Date.now, required: true }
    }],
    lastMessage: { type: String },
    lastTime: { type: Number }
})

const chatModel = new mongoose.model("chat", chatSchema);

export default chatModel;
// / chats: [{
//     chatId : {type : mongoose.Types.ObjectId, ref: "chat", required: true},
//     name : {type : String, required : true}
// }],