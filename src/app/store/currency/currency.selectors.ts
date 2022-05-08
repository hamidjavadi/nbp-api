import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currencyFeatureKey } from './currency.reducer';
import { ICurrencyState } from './types';

export const selectCurrencyState = createFeatureSelector<ICurrencyState>(
  currencyFeatureKey
);

export const selectCurrencies = createSelector(
  selectCurrencyState,
  (state) => state.currencies
)

export const selectFirstFetch = createSelector(
  selectCurrencyState,
  (state) => state.firstFetch
)

export const selectCurrenciesIsLoading = createSelector(
  selectCurrencyState,
  (state) => state.isLoading
)
