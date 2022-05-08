import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCurrenciesFailure, loadCurrenciesSuccess } from '../store/currency/currency.actions';
import { ApiResponse } from '../types';
import { dateFormatter } from '../utils/date-formatter';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) { }

  /**
   * Fetchs data from the server
   *
   * @param table String
   * @param date Date
   * @returns Void
   */
  loadCurrencies(table: string | null | undefined, date: Date | null | undefined) {
    try {

      let url = '';

      if (!date) {
        url = `https://api.nbp.pl/api/exchangerates/tables/${table}/?format=json`;
      } else {
        const formattedDate = dateFormatter(date);
        url = `https://api.nbp.pl/api/exchangerates/tables/${table}/${formattedDate}/?format=json`;
      }

      this.httpClient.get(url).toPromise()
        .then((response) => {
          const apiResponse = response as ApiResponse[];

          if (apiResponse[0]) {
            this.store.dispatch(loadCurrenciesSuccess({
              currencies: apiResponse[0].rates,
              firstFetch: false
            }))
          }
        }).catch(error => {
          this.store.dispatch(loadCurrenciesFailure({
            error: error
          }))
        });

    } catch (error) {
      this.store.dispatch(loadCurrenciesFailure({
        error: error
      }))
    }
  }

}
