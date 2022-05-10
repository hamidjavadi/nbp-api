import * as fromApp from './app.actions';
import { AppActions } from './types';

describe('App State Actions', () => {
  it(`Should have ${AppActions.SetTheme} Action`, () => {
    expect(fromApp.setAppTheme.type).toBe(AppActions.SetTheme);
  });

  it(`Should have ${AppActions.AddError} Action`, () => {
    expect(fromApp.addAppError.type).toBe(AppActions.AddError);
  });

  it(`Should have ${AppActions.ErrorShown} Action`, () => {
    expect(fromApp.appErrorShown.type).toBe(AppActions.ErrorShown);
  });
});
