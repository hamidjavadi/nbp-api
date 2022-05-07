import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dateFormatter } from '../utils/date-formatter';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Fetchs data from the server
   *
   * @param table String
   * @param date Date
   * @returns Void
   */
  loadCurrencies(table: string = 'A', date: Date | null = null) {
    try {

      let url = '';

      if (!date) {
        url = `https://api.nbp.pl/api/exchangerates/tables/${table}/?format=json`;
      } else {
        const formattedDate = dateFormatter(date);
        url = `https://api.nbp.pl/api/exchangerates/tables/${table}/${formattedDate}/?format=json`;
      }

      this.httpClient.get(url)
        .subscribe((response) => console.log(response));

    } catch (error) {

    }
  }

}
