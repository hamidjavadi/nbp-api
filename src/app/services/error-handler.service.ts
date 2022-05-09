import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ErrorMessage } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  errors: ErrorMessage[] = [];

  constructor(
    private messageService: MessageService,
  ) {
    this.defineErrors();
  }

  /**
   * Handles errors whole the app
   *
   * @param error Error
   */
  handleError(error: Error | HttpErrorResponse) {

    let errorFromErrorList!: ErrorMessage;
    errorFromErrorList = this.findError(error);

    this.showError(errorFromErrorList.summary, errorFromErrorList.detail);

  }

  /**
   * Shows an error dialog
   *
   * @param summary string
   * @param detail string
   */
  showError(summary: string, detail: string) {
    this.messageService.clear();
    this.messageService.add({ severity: 'error', summary: summary, detail: detail, });
  }

  /**
   * Finds an error from error list
   *
   * @param name string
   * @returns
   */
  findError(error: Error | HttpErrorResponse): ErrorMessage {

    let code: string = '';

    if (error instanceof HttpErrorResponse) {
      code = `${error.name}_${error.status}`;
    } else {
      code = error.name;
    }

    let searchResult = this.errors.find(error => error.code === code);

    if (!searchResult) {
      searchResult = {
        code: 'Unknown_Error',
        summary: 'Unknown error occurred!',
        detail: 'Please contact to administrator or try again later'
      }
    }

    return searchResult;
  }

  /**
   * Defines errors list
   *
   */
  private defineErrors() {
    this.errors.push(
      {
        code: 'Invalid_Selected_Date',
        summary: 'Selected date is not valid',
        detail: 'Make sure the date doesn\'t refer to the future or to more than 93 days ago!'
      },
      {
        code: 'HttpErrorResponse_0',
        summary: 'No Internet!',
        detail: 'Check your internet connection and try again!'
      },
      {
        code: 'HttpErrorResponse_404',
        summary: '404 Not Found!',
        detail: 'There is not any currency record on the selected date!'
      });
  }

  /**
   * Generates an Error from given name and message
   *
   * @param name string
   * @param message string
   * @returns Error
   */
  generateError(name: string, message?: string): Error {
    const error = new Error(message);
    error.name = name;

    return error;
  }

}
