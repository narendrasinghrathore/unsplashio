import {Injectable} from '@angular/core';

@Injectable()
/** The @Injectable() decorator tells Angular that this service might itself have injected dependencies. It doesn't have dependencies
** now but it will soon. Whether it does or it doesn't, it's good practice to keep the decorator.
 **/
export class AuthService {

  constructor() {
  }

  private unsplashClientId:string = "Client-ID a484bdfcdc7c450e68d5126dca7b048c771961bb4fa9ee575805b7d245bf436a";


  getAuthorizationHeader():string {

    return this.unsplashClientId;

  }

}
