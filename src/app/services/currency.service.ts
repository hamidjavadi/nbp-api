import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  hideCurrenciesLoading,
  loadCurrenciesSuccess,
  removeAllCurrencies,
} from '../store/currency/currency.actions';
import { ApiResponse, ErrorCodes } from '../types';
import { DateService } from './date.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(
    private dateService: DateService,
    private errorService: ErrorHandlerService,
    private httpClient: HttpClient,
    private store: Store
  ) {}

  /**
   * Fetchs data from the server
   *
   * @param table String
   * @param date Date
   * @returns Void
   */
  loadCurrencies(
    table: string | null | undefined,
    date: Date | null | undefined
  ) {
    let url = '';

    if (!date) {
      url = `https://api.nbp.pl/api/exchangerates/tables/${table}/?format=json`;
    } else {
      // Validate the date before sending the request
      if (this.dateService.isValidDate(date) === false) {
        throw new Error(ErrorCodes.Invalid_Selected_Date);
      }

      const formattedDate = this.dateService.formatDate(date);
      url = `https://api.nbp.pl/api/exchangerates/tables/${table}/${formattedDate}/?format=json`;
    }

    this.httpClient.get(url).subscribe(
      (response) => {
        const apiResponse = response as ApiResponse[];

        if (apiResponse[0]) {
          this.store.dispatch(
            loadCurrenciesSuccess({
              currencies: apiResponse[0].rates,
              firstFetch: false,
            })
          );
        }
      },
      (httpError) => {
        const errorType = this.errorService.getErrorType(httpError);

        if (errorType === ErrorCodes.HttpErrorResponse_404) {
          this.store.dispatch(removeAllCurrencies());
          this.store.dispatch(hideCurrenciesLoading());
        } else {
          this.store.dispatch(hideCurrenciesLoading());
          throw httpError;
        }
      },
      () => {
        this.store.dispatch(hideCurrenciesLoading());
      }
    );
  }
}
