import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurrency from './currency.reducer';

export const selectCurrencyState = createFeatureSelector<fromCurrency.State>(
  fromCurrency.currencyFeatureKey
);
