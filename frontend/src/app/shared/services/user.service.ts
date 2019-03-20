import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Car} from '../models/car.model';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {BackendResponse} from '../models/backend-response.model';

@Injectable()
export class UserService {

  private user: User;
  private userSubject = new Subject<User>();
  public userObservable = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loginFromLocalStorage().subscribe();
  }

  login(user: User): Observable<BackendResponse> {
    return this.http.post('http://localhost:3000/login',
      user).pipe(
      map(res => {

        const backendResponse = new BackendResponse(res);

        if (this.isUserDetailsCorrect(backendResponse)) {
          this.user = new User(backendResponse.responseData);

          this.userSubject.next(this.user);

          localStorage.setItem('user', JSON.stringify(this.user));
        }

        return new BackendResponse(res);
      })
    );
  }

  private isUserDetailsCorrect(backendResponse: BackendResponse) {
    const loggedInUser = new User(backendResponse.responseData);

    return 'email' in loggedInUser;
  }

  loginFromLocalStorage(): Observable<void> {
    const user = new User(JSON.parse(localStorage.getItem('user')));

    if(!user || !user._id) {
      return new Observable();
    }

    const url = 'http://localhost:3000/user/' + user._id;

    return this.http.get(url).pipe(
      map(res => {
        const backendResponse = new BackendResponse(res);

        this.userSubject.next(new User(backendResponse.responseData));
      })
    );
  }

  register(user: User): Observable<BackendResponse> {
    return this.http.post('http://localhost:3000/user',
      user).pipe(
      map(res => {

        return new BackendResponse(res);
      })
    );
  }

  logout(): void {
    this.userSubject.next(null);

    localStorage.removeItem('user');
  }

  getCars(): Array<Car> {
    var cars = [
      new Car({
        _id: '1',
        name: 'some car name',
        type: 'some role',
        creationYear: 1993,
        number: '312312312',
        gear: 'automate',
        image: 'data:image/jpeg;base64,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',
        mileage: 10,
        isAvailableForRent: true,
        isProperForRent: true,
        orderStatus: 'Active',
      }),
    ];

    return cars;
  }

  updateUser(updatedUser: User) {
    const url = 'http://localhost:3000/user/' + updatedUser._id;

    return this.http.put(url,
      updatedUser).pipe(
      map(res => {

        return new BackendResponse(res);
      })
    );
  }

  getUsers(): Array<User> {
    return [
      new User({
        _id: '1',
        firstName: 'first name',
        lastName: 'last name',
        userName: 'userSubject name',
        password: '31231231231',
        ID: '31231231231',
        sex: 'male',
        email: 'email',
        dateOfBirth: new Date(),
        image: 'https://www.akademi.adengrup.com.tr/resimler/egitmenler/307482205256774854474505_medium.jpg',
        role: [
          'userSubject',
        ]
      })
    ]
      ;
  }

  removeUser(user: User) {

  }

  reloadUser() {
    this.loginFromLocalStorage().subscribe();
  }
}
