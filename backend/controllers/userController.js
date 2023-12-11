import userModel from "../models/userModel.js";

class userController {
  static newUser = async (req, res) => {
    const { firstName, lastName, number, password } = req.body;
    const check = await userModel.findOne({ number });
    if (check) {
      res.status(404).send({ message: "user already exits", code: 404 });
    } else {
      const newUser = new userModel({
        firstName,
        lastName,
        number,
        password,
        chats: [],
      });
      try {
        await newUser.save();
        console.log("new user saved", newUser);
        res.status(202).json({ message: "new User saved", user: newUser });
      } catch (error) {
        console.log("user could not be saved", error);
      }
    }
  };
  static getUser = async (req, res) => {
    const { number, password } = req.body;
    try {
      const user = await userModel.findOne({ number });
      if (password === user.password)
        res
          .status(202)
          .json({ message: "successfully logged in...", code: 202, user });
      else
        res
          .status(404)
          .json({ message: "password didn't matched...", code: 404 });
    } catch (error) {
      res.status(404).json({ message: "user not found" });
    }
  };
  static updateUser = async (req, res) => {
    const { name, number, password, id } = req.body;
    try {
      const newUser = {
        name,
        number,
        password,
        chats: [],
      };
      const user = userModel.findByIdAndUpdate(id, newUser);
      res.status(202).json({ user });
    } catch (error) {
      res.status(404).json({ message: "user not found" });
    }
  };
}

export default userController;
