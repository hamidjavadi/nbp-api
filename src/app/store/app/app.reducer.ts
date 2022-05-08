import { createReducer, on } from '@ngrx/store';
import { setAppTheme } from './app.actions';
import { IAppState } from './types';

export const appFeatureKey = 'app';

export const initialState: IAppState = {
  themes: [
    {
      file: 'mdc-dark.css',
      name: 'Ciemny',
      selected: false
    },
    {
      file: 'mdc-light.css',
      name: 'Jasny',
      selected: true,
    }
  ]
};

export const appReducer = createReducer(
  initialState,
  on(setAppTheme, (state, action) => {

    const { themes } = { ...state };

    const updatedThemes = themes.map((theme) => {

      const copiedTheme = { ...theme };

      // Set all theme to unselected
      copiedTheme.selected = false;

      // Set the selected theme
      if (copiedTheme.file === action.theme.file) {
        copiedTheme.selected = true;
      }

      return copiedTheme;
    })

    return { ...state, themes: updatedThemes }
  }),
);
