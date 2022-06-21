import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { setAppTheme } from './app.actions';
import { tap } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private themeService: ThemeService) {}

  setAppTheme$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(setAppTheme),
        tap((action) => {
          this.themeService.setApplicationTheme(action.theme);
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
