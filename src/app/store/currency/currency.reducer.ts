import { Action, createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';
import { ICurrencyState } from './types';

export const currencyFeatureKey = 'currency';
export const initialState: ICurrencyState = {
  currencies: [],
  isLoading: false,
  table: 'A',
  date: new Date(),
  error: undefined
};

export const currencyReducer = createReducer(
  initialState,
  on(CurrencyActions.loadCurrencies, (state, action) => {
    return { ...state, isLoading: action.isLoading, }
  }),
  on(CurrencyActions.loadCurrenciesSuccess, (state, action) => {
    return { ...state, isLoading: false, currencies: action.currencies }
  }),
  on(CurrencyActions.loadCurrenciesFailure, (state, action) => {
    return { ...state, error: action.error }
  }),
);
