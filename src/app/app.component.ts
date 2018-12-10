import {Component} from '@angular/core';
import {UsersService} from './users.service';
import {TransactionsService} from './transactions.service';

import {ReversePipe} from 'ngx-pipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, TransactionsService, ReversePipe]
})
export class AppComponent {
  users = [];
  transactions = [];
  public added = false;

  // first_name: string;
  // last_name: string;
  // company: string;


  constructor(private usersService: UsersService, private transactionsService: TransactionsService, private reversePipe: ReversePipe) {
    this.reversePipe.transform(this.transactions);
  }

  ngOnInit() {
    // this.users = this.userService.users
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.transactionsService.getTransctions().subscribe(transactions => {
      console.log(transactions);
      this.transactions = transactions;
    });

  }

  onClick() {
    if (this.added === false) {
      // this.first_name = '';
      // this.last_name = '';
      // this.company = '';
      this.added = true;
    } else {
      this.added = false;
    }
  }

  addEmployee(first_name, last_name, company) {
    this.usersService.addEmployee(first_name, last_name, company).subscribe(
      res => {
        console.log(res);
        this
      },
      err => {
        console.log('Error occured');
      }
    );
    ;
  }

}
