import { Schema } from "mongoose";


const Cat = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    breed: { type: String, required: true, minLength: 3 },
    weight: { type: Number, required: true, min: 1 },
    color: { type: String, required: true }
  }
)