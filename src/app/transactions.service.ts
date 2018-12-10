import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ReversePipe} from 'ngx-pipes';

@Injectable()
export class TransactionsService {

  constructor(private http: Http, private reversePipe: ReversePipe) {
    this.reversePipe.transform(this.getTransctions());
  }

  getTransctions() {
    return this.http.get('http://localhost:5000/transactions')
      .pipe(map(response => response.json()))
      .pipe(map(transactions => {
        return transactions.map(tr => {
          return {
            id: tr.id,
            transaction_type: tr.transacion_type_name,
            employee_name: tr.first_name + ' ' + tr.last_name,
            timestamp: tr.timestamp,
            amount: tr.amount,
            name: tr.name
          };
        });
      }));
  }
}
