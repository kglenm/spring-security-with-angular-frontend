import {Injectable} from "@angular/core";
import {Headers, Http, RequestMethod, RequestOptions} from "@angular/http";

@Injectable()
export class AppComponentService{
  url = "http://localhost:8080";
  constructor(private http: Http){}

  login(){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    return this.http.post(this.url+"/login", {"email_address":"test","password":"12345"}, options);
  }

}
