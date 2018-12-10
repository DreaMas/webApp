import {Component, Input} from '@angular/core';
import {ReversePipe} from 'ngx-pipes';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [ReversePipe]
})
export class TransactionComponent {
  @Input() transactions;
  constructor(private reversePipe: ReversePipe) {
    this.reversePipe.transform(this.transactions); // Returns: "oof"
  }
}
