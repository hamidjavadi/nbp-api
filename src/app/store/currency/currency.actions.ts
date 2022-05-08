import { createAction, props } from '@ngrx/store';
import { Currency } from 'src/app/types';
import { CurrencyActions } from './types';

export const loadCurrencies = createAction(
  CurrencyActions.LoadCurrencies,
  props<{
    isLoading: boolean,
    table?: string | null,
    date?: Date | null
  }>()
);

export const loadCurrenciesSuccess = createAction(
  CurrencyActions.LoadCurrenciesSuccess,
  props<{ currencies: Currency[], firstFetch: boolean }>()
);

export const loadCurrenciesFailure = createAction(
  CurrencyActions.LoadCurrenciesFailure,
  props<{ error: any }>()
);
