import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
   
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },

  },
  
  { timestamps: true }   /* will give us the time when it's created */
);

const User = mongoose.model("User", UserSchema);
export default User;