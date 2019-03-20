import {Injectable} from '@angular/core';
import {Car} from '../models/car.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BackendResponse} from '../models/backend-response.model';
import {Observable, Subject} from 'rxjs';
import {User} from '../models/user.model';
import {Branch} from '../models/branch.model';

@Injectable()
export class BranchService {

  constructor(private http: HttpClient) {
  }

  getBranches(params: object = {}): Observable<BackendResponse> {

    return this.http.get('http://localhost:3000/branch', params).pipe(
      map(res => {

        return new BackendResponse(res);
      })
    );
  }

  getBranch(branch: Branch, params: object = {}): Observable<BackendResponse> {
    const url = 'http://localhost:3000/branch/5c908f19cd094f3dc0adfbeb';
    // const url =  'http://localhost:3000/branch/' + branch._id;

    return this.http.get(url, params).pipe(
      map(res => {

        return new BackendResponse(res);
      })
    );
  }

}
