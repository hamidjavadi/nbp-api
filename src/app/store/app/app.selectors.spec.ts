import { appFeatureKey, } from './app.reducer';
import { selectAppState } from './app.selectors';

describe('App Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAppState({
      [appFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});
