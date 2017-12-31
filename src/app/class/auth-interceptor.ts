import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
/*Notice the RxJS do() operator—it adds a side effect to an Observable without affecting the values on the stream. Here, it detects the HttpResponse event and logs the time the request took.*/
import {AuthService} from '../auth-service.service';
import {MessageService} from '../message.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService,private message: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    // Get the auth header from the service.
    const authHeader = this.auth.getAuthorizationHeader();
    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq).do(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        this.message.add(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
      }
    });
  }
}
