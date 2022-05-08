import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  isValidDate(date: Date | string | undefined): boolean {

    try {

      const nowDate = new Date();
      const the93DaysAgoDate = new Date();
      the93DaysAgoDate.setDate(-93)

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
