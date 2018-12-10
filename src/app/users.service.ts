import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('http://localhost:5000/customers')
      .pipe(map(response => response.json()))
      .pipe(map(users => {
        return users.map(u => {
          return {
            name: u.first_name + ' ' + u.last_name,
            company: u.company,
            amount: u.amount
          };
        });
      }));
  }

  addEmployee(first_name, last_name, company) {
    const body = {first_name: first_name, last_name: last_name, company: company};
    // console.log(this.http.post('http://localhost:5000/customers', body));
    return this.http.post('http://localhost:5000/customers', body);
  }
}
