/* NOTE: currently we have to do the following to get our DB running:

1: go to our .env, put in our mongo link with the password inserted into the link

2: comment out the following from .env: 
# AUTH_DOMAIN=
# AUTH_AUDIENCE=
# AUTH_CLIENT_ID=

3: comment out all of Auth0Provider.configure() in Startup.js

*/

import BaseController from "../utils/BaseController.js";



export class CatsController extends BaseController {

  constructor() {
    super('api/cats') // super calls the constructor of the base controller

    this.router // talking about the small hallway off of the big hallway (baseController route)
      .get('', this.getCats)
  }


  // NOTE: have to make sure to include all 3 of these every time I think!
  // NOTE: request, is an object representing the incoming request from a user
  // NOTE: response, is an object for you to manipulate and use to send responses the requestor
  // NOTE: next, is how we kick people back into the hallway.
  getCats(request, response, next) {
    try {
      console.log('getting me some cats')
    } catch (error) {
      // NOTE: this sends user on to the next "hallway"
      next(error)
    }
  }

}