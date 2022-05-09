import { Action, createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';
import { ICurrencyState } from './types';

export const currencyFeatureKey = 'currency';
export const initialState: ICurrencyState = {
  currencies: [],
  date: new Date(),
  error: undefined,
  firstFetch: true,
  isLoading: false,
  table: 'A',
};

export const currencyReducer = createReducer(
  initialState,
  on(CurrencyActions.loadCurrencies, (state, action) => {
    return { ...state }
  }),
  on(CurrencyActions.loadCurrenciesSuccess, (state, action) => {
    return { ...state, isLoading: false, currencies: action.currencies, firstFetch: action.firstFetch }
  }),
  on(CurrencyActions.loadCurrenciesFailure, (state, action) => {
    return { ...state, error: action.error }
  }),
  on(CurrencyActions.showCurrenciesLoading, (state) => {
    return { ...state, isLoading: true }
  }),
  on(CurrencyActions.hideCurrenciesLoading, (state) => {
    return { ...state, isLoading: false }
  }),
  on(CurrencyActions.removeAllCurrencies, (state) => {
    return { ...state, currencies: [] }
  })
);
