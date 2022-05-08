import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/types';
import { loadCurrencies } from 'src/app/store/currency/currency.actions';
import { selectCurrencies, selectCurrenciesIsLoading, selectFirstFetch } from 'src/app/store/currency/currency.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  currencies: Currency[] = [];
  isLoading: boolean = false;
  filterDate: any;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

    this.store.select(selectFirstFetch).subscribe((firstFetch) => {
      if (firstFetch === true) {
        this.store.dispatch(loadCurrencies({
          isLoading: true,
          table: 'A'
        }));
      }
    })

    this.store.select(selectCurrencies).subscribe((currencies) => {
      this.currencies = currencies;
    })

    this.store.select(selectCurrenciesIsLoading).subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }

  filterDateChanged(value: Date) {
    try {
      this.store.dispatch(loadCurrencies({
        isLoading: true,
        table: 'A',
        date: value
      }));
    } catch (error) {
      // TODO: Error Service
    }
  }

}
