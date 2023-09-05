

const fakeDb = {
  cats: [
    { name: 'cranky', age: 11, color: 'brown' },
    { name: 'lil john', age: 2, color: 'torti' },
    { name: 'holga', age: 32, color: 'black' },
    { name: 'jennifer', age: 5, color: 'cat colored' }
  ]
}





class CatsService {
  getCats() {
    const cats = fakeDb.cats
    return cats
  }
}



export const catsService = new CatsService()