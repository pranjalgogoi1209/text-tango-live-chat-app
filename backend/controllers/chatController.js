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
}
export default chatController;