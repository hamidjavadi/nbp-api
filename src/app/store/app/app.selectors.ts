import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey } from './app.reducer';
import { IAppState } from './types';

export const selectAppState = createFeatureSelector<IAppState>(
  appFeatureKey
);

export const selectAppCurrentTheme = createSelector(
  selectAppState,
  (state) => state.themes.find((theme) => theme.selected === true)
)

export const selectAppAllThemes = createSelector(
  selectAppState,
  (state) => state.themes
)

