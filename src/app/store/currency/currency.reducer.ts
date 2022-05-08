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
    return { ...state, isLoading: action.isLoading, }
  }),
  on(CurrencyActions.loadCurrenciesSuccess, (state, action) => {
    return { ...state, isLoading: false, currencies: action.currencies, firstFetch: action.firstFetch }
  }),
  on(CurrencyActions.loadCurrenciesFailure, (state, action) => {
    return { ...state, error: action.error }
  }),
);
