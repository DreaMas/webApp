import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {TransactionComponent} from './transaction/transaction.component';

import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
