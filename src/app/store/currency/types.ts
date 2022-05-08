import { Currency } from "src/app/types";

export interface ICurrencyState {
  currencies: Currency[],
  isLoading: boolean,
  table: string,
  date: Date | null,
  error: any
}

export enum CurrencyActions {
  LoadCurrencies = '[Currency] Load Currencies',
  LoadCurrenciesSuccess = '[Currency] Load Currencies Success',
  LoadCurrenciesFailure = '[Currency] Load Currencies Failure'
}
