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
    super('api/cats')

    this.router
      .get('', this.getCats)
  }


  // NOTE: have to make sure to include all 3 of these every time I think!
  getCats(request, response, next) {
    throw new Error("Method not implemented.");
  }

}