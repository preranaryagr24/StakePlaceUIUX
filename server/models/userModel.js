import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name for the user"],
  },
  email: {
    type: String,
    required: [true, "Please provide email of the user"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJwt = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECREAT, {
    expiresIn: "1h",
  });
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const userModel = mongoose.model("user", userSchema);

export default userModel;
