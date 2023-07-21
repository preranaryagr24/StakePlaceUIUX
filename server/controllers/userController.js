import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if ((!name, !email, !password)) {
      res.status(400).json({ message: " Please provide all fields " });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "User already exists , Please Login " });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = user.createJwt();

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error  });
  }
};

export const signin = async (req, res) => {
  const { phone, password } = req.body;

  console.log(password);

  const isUserExist = await User.findOne({ phone }).select("-__v");

  if (!isUserExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "User Doesn't exist, Please Signup" });
  }

  console.log(isUserExist);

  const passwordMatch = await isUserExist.comparePassword(password);
  if (!passwordMatch) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: " Password Doesn't Match " });
  }

  const token = isUserExist.createJwt();

  res.status(StatusCodes.OK).json({
    result: {
      user: {
        _id: isUserExist._id,
        name: isUserExist.name,
        email: isUserExist.email,
      },
      token,
    },
  });
};
