import { createAction, props } from '@ngrx/store';
import { Theme, ThemeActions } from './types';

export const setAppTheme = createAction(
  ThemeActions.SetTheme,
  props<{ theme: Theme }>()
);
