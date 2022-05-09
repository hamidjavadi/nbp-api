import { createAction, props } from '@ngrx/store';
import { Theme, AppActions, AppError } from './types';

export const setAppTheme = createAction(
  AppActions.SetTheme,
  props<{ theme: Theme }>()
);

export const addAppError = createAction(
  AppActions.AddError,
  props<{ error: AppError }>()
);

export const AppErrorShown = createAction(
  AppActions.ErrorShown,
  props<{ error: AppError }>()
);
