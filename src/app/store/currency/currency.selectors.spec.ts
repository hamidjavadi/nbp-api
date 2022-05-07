import * as fromCurrency from './currency.reducer';
import { selectCurrencyState } from './currency.selectors';

describe('Currency Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCurrencyState({
      [fromCurrency.currencyFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
