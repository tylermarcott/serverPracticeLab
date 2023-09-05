import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"


// const fakeDb = {
//   cats: [
//     { name: 'cranky', age: 11, color: 'brown' },
//     { name: 'lil john', age: 2, color: 'torti' },
//     { name: 'holga', age: 32, color: 'black' },
//     { name: 'jennifer', age: 5, color: 'cat colored' }
//   ]
// }





class CatsService {


  /*{
      "name": "kitty",
      "breed": "random cat",
      "weight": 11,
      "color": "all colors"
}*/




  async createCat(catData) {
    const cat = await dbContext.Cats.create(catData)
    return cat
  }






  async getCatByName(catName) { //mongoose find finds ALL, not just one
  }





  // NOTE: you have to put your model, for instance Cats, in the DbContext.js

  async getCats() {
    const cats = await dbContext.Cats.find()
    return cats
  }
}



export const catsService = new CatsService()