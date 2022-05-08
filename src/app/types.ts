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
