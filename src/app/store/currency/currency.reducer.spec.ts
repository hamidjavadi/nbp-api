import { currencyReducer, initialState } from './currency.reducer';

describe('Currency Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = currencyReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
