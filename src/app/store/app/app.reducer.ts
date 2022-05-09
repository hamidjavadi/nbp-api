import { createReducer, on } from '@ngrx/store';
import { addAppError, AppErrorShown, setAppTheme } from './app.actions';
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
  ],
  errors: []
};

export const appReducer = createReducer(
  initialState,
  on(setAppTheme, (state, action) => {

    const { themes } = { ...state }

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
  on(addAppError, (state, action) => {
    return { ...state, errors: [...state.errors, action.error] }
  }),
  on(AppErrorShown, (state, action) => {

    const { errors } = { ...state };
    const updatedErrors = errors.map((error) => {

      const copiedError = { ...error };

      if (copiedError.code === action.error.code && action.error.shown === false) {
        copiedError.shown = true;
      }

      return copiedError;
    })

    return { ...state, errors: updatedErrors }
  })
);
