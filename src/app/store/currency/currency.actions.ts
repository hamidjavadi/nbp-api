import { createAction, props } from '@ngrx/store';
import { Currency } from 'src/app/types';
import { CurrencyActions } from './types';

export const loadCurrencies = createAction(
  CurrencyActions.LoadCurrencies,
  props<{
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

export const showCurrenciesLoading = createAction(
  CurrencyActions.ShowLoading
);

export const hideCurrenciesLoading = createAction(
  CurrencyActions.HideLoading
);

export const removeAllCurrencies = createAction(
  CurrencyActions.RemoveAllCurrencies
);
