export interface ICurrencyState {
  currencies: Currency[],
  isLoading: boolean
}

export type Currency = {
  currency: string,
  code: string,
  mid: number
}

export enum CurrencyActions {
  LoadCurrencies = '[Currency] Load Currencies',
  LoadCurrenciesSuccess = '[Currency] Load Currencies Success',
  LoadCurrenciesFailure = '[Currency] Load Currencies Failure'
}
