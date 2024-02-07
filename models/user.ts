import { Schema, model, models } from "mongoose";

let UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    match: [
      /[^a-zA-Z0-9\-_./]/,
      "Username cannot contain spaces or any special characters other than - _ .",
    ],
    minLength: [4, "Username cannot be less than 4 characters long"],
    maxLength: [16, "Username cannot be longer than 16 characters"],
  },
  password: {
    type: String,
    required: [true, "You must have a password"],
    select: false,
  },
});

const User = models.User || model("user", UserSchema);

export default User;
