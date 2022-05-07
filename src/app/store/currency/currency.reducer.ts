import { Action, createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';
import { ICurrencyState } from './types';

export const currencyFeatureKey = 'currency';
export const initialState: ICurrencyState = {
  currencies: [],
  isLoading: false
};

export const currencyReducer = createReducer(
  initialState,

  on(CurrencyActions.loadCurrencies, state => state),
  on(CurrencyActions.loadCurrenciesSuccess, (state, action) => state),
  on(CurrencyActions.loadCurrenciesFailure, (state, action) => state),

);
