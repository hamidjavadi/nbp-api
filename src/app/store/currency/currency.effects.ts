import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CurrencyActions from './currency.actions';



@Injectable()
export class CurrencyEffects {

  loadCurrencys$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CurrencyActions.loadCurrencies),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CurrencyActions.loadCurrenciesSuccess({ data })),
          catchError(error => of(CurrencyActions.loadCurrenciesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) { }

}
