import { User } from '../models/User.model.js';

export const addUser = async (req, res) => {
  try {
    const userBodyToSave = req.body;
    const newUser = new User(userBodyToSave);
    const savedUser = await newUser.save();
    console.log({ savedUser });
    res.status(200).send({ data: savedUser });
  } catch (error) {}
};

export const getAllUsers = async (req, res) => {
  console.log('brr');
  try {
    const users = await User.find();
    res.status(200).send({ data: users });
  } catch (error) {
    res.send(error);
  }
};
