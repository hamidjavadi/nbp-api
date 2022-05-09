import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addAppError } from '../store/app/app.actions';
import { AppError } from '../store/app/types';
import { loadCurrenciesSuccess } from '../store/currency/currency.actions';
import { ApiResponse } from '../types';
import { dateFormatter } from '../utils/date-formatter';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private httpClient: HttpClient,
    private store: Store,
    private errorService: ErrorHandlerService
  ) { }

  /**
   * Fetchs data from the server
   *
   * @param table String
   * @param date Date
   * @returns Void
   */
  loadCurrencies(table: string | null | undefined, date: Date | null | undefined) {

    let url = '';

    if (!date) {
      url = `https://api.nbp.pl/api/exchangerates/tables/${table}/?format=json`;
    } else {
      const formattedDate = dateFormatter(date);
      url = `https://api.nbp.pl/api/exchangerates/tables/${table}/${formattedDate}/?format=json`;
    }

    this.httpClient.get(url).subscribe(
      (response) => {
        const apiResponse = response as ApiResponse[];

        if (apiResponse[0]) {
          this.store.dispatch(loadCurrenciesSuccess({
            currencies: apiResponse[0].rates,
            firstFetch: false
          }))
        }
      }, (httpError) => {

        const error = this.errorService.findError(httpError);
        const appError: AppError = { ...error, shown: false }

        this.store.dispatch(addAppError({
          error: { ...appError, shown: false },
        }))

      });
  }

}
