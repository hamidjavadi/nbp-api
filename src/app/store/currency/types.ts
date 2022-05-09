import { Currency } from "src/app/types";

export interface ICurrencyState {
  currencies: Currency[],
  date: Date | null,
  error: any,
  firstFetch: boolean,
  isLoading: boolean,
  table: string,
}

export enum CurrencyActions {
  HideLoading = '[Currency] Hide Loading',
  LoadCurrencies = '[Currency] Load Currencies',
  LoadCurrenciesSuccess = '[Currency] Load Currencies Success',
  LoadCurrenciesFailure = '[Currency] Load Currencies Failure',
  RemoveAllCurrencies = '[Currency] Remove All Currencies',
  ShowLoading = '[Currency] Show Loading',
}
