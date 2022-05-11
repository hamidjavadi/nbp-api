import { Component, OnInit } from '@angular/core';
import { Currency, ErrorCodes } from 'src/app/types';
import { loadCurrencies } from 'src/app/store/currency/currency.actions';
import { selectCurrencies, selectCurrenciesIsLoading, selectFirstFetch } from 'src/app/store/currency/currency.selectors';
import { Store } from '@ngrx/store';
import { Table } from 'primeng/table';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  currencies: Currency[] = [];
  currencyCodes: string[] = [];
  isLoading: boolean = false;
  filterDate: any;

  constructor(
    private dateService: DateService,
    private store: Store,
  ) { }

  ngOnInit(): void {

    this.store.select(selectFirstFetch).subscribe((firstFetch) => {
      if (firstFetch === true) {
        this.store.dispatch(loadCurrencies({
          table: 'D'
        }));
      }
    })

    this.store.select(selectCurrencies).subscribe((currencies) => {
      this.currencies = currencies;
      this.currencyCodes = this.currencies.map((currency) => currency.code);
    })

    this.store.select(selectCurrenciesIsLoading).subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }

  clearFilter(table: Table) {
    table.clear();
  }

  filterDateChanged(value: Date) {
    if (this.dateService.isValidDate(value) === false) {
      throw new ErrorEvent(ErrorCodes.Invalid_Selected_Date);
    }

    this.store.dispatch(loadCurrencies({
      table: 'A',
      date: value
    }));
  }

}
