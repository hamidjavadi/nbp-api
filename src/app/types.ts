export type Currency = {
  currency: string,
  code: string,
  mid: number
}

export type ApiResponse = {
  effectiveDate: string,
  no: string,
  rates: Currency[],
  table: string
}

export type ErrorMessage = {
  code: string,
  detail?: string,
  summary: string,
  showApiError: boolean,
}

export enum ErrorCodes {
  Invalid_Selected_Date = 'Invalid_Selected_Date',
  HttpErrorResponse_0 = 'HttpErrorResponse_0',
  HttpErrorResponse_404 = 'HttpErrorResponse_404',
  HttpErrorResponse_400 = 'HttpErrorResponse_400',
}
