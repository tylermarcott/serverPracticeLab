import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { catSchema } from "../models/Cats.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  // NOTE: make sure to register with db in app

  Cats = mongoose.model('Cats', catSchema)

}

export const dbContext = new DbContext()
