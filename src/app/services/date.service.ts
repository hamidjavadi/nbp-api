import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  /**
   * Format the given date to YYYY-MM-DD format
   *
   * @param date Date
   * @returns string
   */
  formatDate(date: Date | null): string {
    try {

      if (!date) {
        date = new Date();
      }

      const dateFormat: string = 'YYYY-MM-DD';
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      let formattedDate = '';

      // Year
      formattedDate = dateFormat.replace('YYYY', `${year}`);

      // Month
      if (month < 10) {
        formattedDate = formattedDate.replace('MM', `0${month}`);
      } else {
        formattedDate = formattedDate.replace('MM', `${month}`);
      }

      // Day
      if (day < 10) {
        formattedDate = formattedDate.replace('DD', `0${day}`);
      } else {
        formattedDate = formattedDate.replace('DD', `${day}`);
      }

      return formattedDate;

    } catch (error) {
      return '';
    }
  }

  /**
   * Validate the given date
   *
   * @param date Date
   * @returns boolean
   */
  isValidDate(date: Date | string | undefined): boolean {

    try {

      const nowDate = new Date();
      const the93DaysAgoDate = new Date();
      the93DaysAgoDate.setDate(the93DaysAgoDate.getDate() - 93)

      if (!date) {
        return false;
      }

      // Check the input of string
      if (typeof date === 'string') {
        date = new Date(date);

        if (date.toString() === 'Invalid Date') {
          return false;
        }
      }

      // Check the input of Date
      if (date instanceof Date === false) {
        return false;
      }

      // The date can not be in the future
      if (date > nowDate) {
        return false;
      }

      // The period should not be longer than 93 days
      if (date < the93DaysAgoDate) {
        return false;
      }

      return true;

    } catch (error) {
      return false;
    }
  }

}
