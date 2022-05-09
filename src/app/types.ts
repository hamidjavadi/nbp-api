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
  detail: string,
  summary: string,
}
