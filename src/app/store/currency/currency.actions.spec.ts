import * as fromCurrency from './currency.actions';
import { CurrencyActions } from './types';

describe('loadCurrencys', () => {
  it(`Should have ${CurrencyActions.LoadCurrencies} Action`, () => {
    expect(fromCurrency.loadCurrencies.type).toBe(CurrencyActions.LoadCurrencies);
  });

  it(`Should have ${CurrencyActions.LoadCurrenciesSuccess} Action`, () => {
    expect(fromCurrency.loadCurrenciesSuccess.type).toBe(CurrencyActions.LoadCurrenciesSuccess);
  });

  it(`Should have ${CurrencyActions.LoadCurrenciesFailure} Action`, () => {
    expect(fromCurrency.loadCurrenciesFailure.type).toBe(CurrencyActions.LoadCurrenciesFailure);
  });

  it(`Should have ${CurrencyActions.ShowLoading} Action`, () => {
    expect(fromCurrency.showCurrenciesLoading.type).toBe(CurrencyActions.ShowLoading);
  });

  it(`Should have ${CurrencyActions.HideLoading} Action`, () => {
    expect(fromCurrency.hideCurrenciesLoading.type).toBe(CurrencyActions.HideLoading);
  });

  it(`Should have ${CurrencyActions.RemoveAllCurrencies} Action`, () => {
    expect(fromCurrency.removeAllCurrencies.type).toBe(CurrencyActions.RemoveAllCurrencies);
  });
});
