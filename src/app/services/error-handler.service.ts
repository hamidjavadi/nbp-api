import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { ErrorCodes, ErrorMessage } from '../types';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  errors: ErrorMessage[] = [];

  constructor(private notificationService: NotificationService) {
    this.defineErrors();
  }

  /**
   * Handles errors whole the app
   *
   * @param error Error
   */
  handleError(error: any) {
    const errorType = this.getErrorType(error);

    if (errorType) {
      const errorFromErrorList: ErrorMessage = this.findError(errorType);

      if (errorFromErrorList.code !== 'Unknown_Error') {
        let errorSummary = '';

        if (errorFromErrorList.showApiError === true) {
          errorSummary = error.error;
        } else {
          errorSummary = errorFromErrorList.summary;
        }

        this.notificationService.showError(
          errorFromErrorList.summary,
          errorSummary,
          'general'
        );
      }
    } else {
      // TODO Send error to the error logger service of the company
    }
  }

  /**
   * Defines errors list
   *
   */
  private defineErrors() {
    this.errors.push(
      {
        code: ErrorCodes.Invalid_Selected_Date,
        summary: 'Selected date is not valid',
        detail:
          "Make sure the date doesn't refer to the future or to more than 93 days ago!",
        showApiError: false,
      },
      {
        code: ErrorCodes.HttpErrorResponse_0,
        summary: 'No Internet!',
        detail: 'Check your internet connection and try again!',
        showApiError: false,
      },
      {
        code: ErrorCodes.HttpErrorResponse_404,
        summary: '404 Not Found!',
        detail: 'There is not any currency record on the selected date!',
        showApiError: false,
      },
      {
        code: ErrorCodes.HttpErrorResponse_400,
        summary: '404 Bad Request!',
        detail: 'The request is not good!',
        showApiError: true,
      }
    );
  }

  /**
   * Finds an error from error list
   *
   * @param name string
   * @returns ErrorMessage
   */
  findError(errorType: string = ''): ErrorMessage {
    let searchResult = this.errors.find((error) => error.code === errorType);

    if (!searchResult) {
      searchResult = {
        code: 'Unknown_Error',
        summary: 'Unknown error occurred!',
        detail: 'Please contact to administrator or try again later',
        showApiError: false,
      };
    }

    return searchResult;
  }

  /**
   * Generates an Error from given name and message
   *
   * @param name string
   * @param message string
   * @returns Error
   */
  generateError(name: string, message?: string): Error {
    const error = new Error();
    error.name = name;
    error.message != message;

    return error;
  }

  /**
   * Get error type from the given error
   *
   * @param error
   * @returns string | undefined
   */
  getErrorType(error: any) {
    let errorType;

    if (error instanceof Error)
      // User error
      errorType = error.name;
    else if (error instanceof HttpErrorResponse)
      // Http error
      errorType = `${error.name}_${error.status}`;
    else if (error instanceof TypeError)
      // Browser error
      console.log(error.message);
    //Unknown resource error
    else console.log(error);

    return errorType;
  }
}
