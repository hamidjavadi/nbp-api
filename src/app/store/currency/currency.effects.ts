import { ErrorHandler, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as CurrencyActions from './currency.actions';
import { CurrencyService } from 'src/app/services/currency.service';

@Injectable()
export class CurrencyEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService,
    private errorHandler: ErrorHandler
  ) { }

  loadCurrencys$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CurrencyActions.loadCurrencies),
      tap((action) => {
        this.currencyService.loadCurrencies(action.table, action.date);
      }),
      ofType(CurrencyActions.loadCurrenciesFailure),
      tap((action) => {
        this.errorHandler.handleError(action.error);
      })
    )
  }, { dispatch: false });

}
