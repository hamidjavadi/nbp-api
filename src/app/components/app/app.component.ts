import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCurrencies } from 'src/app/store/currency/currency.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nbp';

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(loadCurrencies({
      isLoading: true,
      table: 'A'
    }));
  }
}
