import mongoose from "mongoose";
import validator from "validator";

// important validation tip from mohammed hajji.
// Always have 3 validations(Server side validation, Front end validation, and schema validation)
// if i use the same schema in another project without frontend or server validation, i still have some valiadation via the schema.
// This is schema validation
const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: [true, "This email is already registered"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    picture: {
      type: String,
      default: "https://www.ode-labs.net/images/default_pic.png",
    },
    status: {
      type: String,
      default: "Hey there! I am using HamJambo!",
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password must be at least 6 characters long"],
      maxLength: [128, "Password must be between 8 and 128 characters long"],
      select: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const userModel =
  mongoose.models.userModel || mongoose.model("UserModel", userSchema);

export default userModel;
