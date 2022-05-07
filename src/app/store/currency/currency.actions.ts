import { createAction, props } from '@ngrx/store';
import { CurrencyActions } from './types';

export const loadCurrencies = createAction(
  CurrencyActions.LoadCurrencies
);

export const loadCurrenciesSuccess = createAction(
  CurrencyActions.LoadCurrenciesSuccess,
  props<{ data: any }>()
);

export const loadCurrenciesFailure = createAction(
  CurrencyActions.LoadCurrenciesFailure,
  props<{ error: any }>()
);
