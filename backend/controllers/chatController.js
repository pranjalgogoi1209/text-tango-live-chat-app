import userModel from "../models/userModel.js";

class chatController {
    static getAllChats = async (req, res) => {
        const number = req.params.id;
        console.log(req.params.id)
        const user = await userModel.findOne({ number: req.params.id });
        // const chats = user.chats;
        user.password = "";
        res.status(202).json({ user })
    }

    static addNewChat = async (req, res) => {
        console.log("addnewchat");
        const { name, number, userId } = req.body;
        const user = await userModel.findById(userId);
        const newChat = {
            name, number, messages: [], lastMessage: "", lastTime: ""
        }
        try {
            // const existingChat = await user.chats.findOne({ number });
            const existingChat = user.chats.find(chat => chat.number === number);
            if (existingChat) res.status(202).json({ message: "Chat already exits", existingChat })
            else {
                try {
                    await user.chats.unshift(newChat);
                    await user.save();
                    const allChats = user.chats;
                    res.status(202).json({ message: "new chat created", code: "202", allChats });
                } catch (error) {
                    res.status(404).json({ message: "problem in creating new chat", code: "404", error });
                }
            }
        } catch (error) {
            res.status(404).json("not found");
            console.log(error)
        }
    }

    static updateChat = async (req, res) => {
        console.log("updatechat");
        const { newName, userId, chatId } = req.body;
        const user = await userModel.findById(userId);
        // const existingChat = user.chats.find(chat => chat.number === number);
        const chat = await user.chats.findById(chatId);
        const updatedChat = {
            newName, number, messages: chat.messages, lastMessage: chat.lastMessage, lastTime: chat.lastTime
        }
        try {
            await user.chats.findByIdAndUpdate(chatId, updatedChat);
            res.status(202).json({ message: "chat has been updated", code: "202", updatedChat });
        } catch (error) {
            res.status(404).json({ message: "problem in updating this chat", code: "404", error });
        }
    }

    static deleteChat = async (req, res) => {
        console.log("deletechat");
        try {
            const { userId, chatId } = req.body;
            const user = await userModel.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const chatIndex = user.chats.findIndex((chat) => chat._id.toString() === chatId);

            if (chatIndex === -1) {
                return res.status(404).json({ message: 'Chat not found' });
            }

            // Remove the chat from the array
            user.chats.splice(chatIndex, 1);

            // Save the updated user document
            await user.save();

            res.status(200).json({ message: 'Chat deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };


    static newChatMessage = async (req, res) => {
        try {
            const { userId, chatId, send, message } = req.body;
            const user = await userModel.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const chat = user.chats.find((chat) => chat._id.toString() === chatId);

            if (!chat) {
                return res.status(404).json({ message: 'Chat not found' });
            }

            const newMessage = {
                send,
                message,
            };

            chat.messages.unshift(newMessage);
            await user.save();

            res.status(200).json({ message: 'New message added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

    static deleteMessage = async (req, res) => {
        try {
            const { userId, chatId, messageId } = req.body;
            const user = await userModel.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const chat = user.chats.find((chat) => chat._id.toString() === chatId);

            if (!chat) {
                return res.status(404).json({ message: 'Chat not found' });
            }

            const messageToRemove = chat.messages.id(messageId);

            if (!messageToRemove) {
                return res.status(404).json({ message: 'Message not found' });
            }

            messageToRemove.remove();
            await user.save();

            res.status(200).json({ message: 'Message deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };

}
export default chatController;