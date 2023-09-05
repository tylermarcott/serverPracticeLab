import { Schema } from "mongoose";


export const catSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    breed: { type: String, required: true, minLength: 3 },
    weight: { type: Number, required: true, min: 1 },
    color: { type: String, required: true }
  }
)

// to do a post request, in postman, in body, go to raw, change type to JSON, them type in the 