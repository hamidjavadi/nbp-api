import { ErrorHandler, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as CurrencyActions from './currency.actions';
import { CurrencyService } from 'src/app/services/currency.service';
import { Store } from '@ngrx/store';

@Injectable()
export class CurrencyEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService,
    private errorHandler: ErrorHandler,
    private store: Store
  ) { }

  loadCurrencies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CurrencyActions.loadCurrencies),
      tap((action) => {
        this.currencyService.loadCurrencies(action.table, action.date);
        this.store.dispatch(CurrencyActions.showCurrenciesLoading());
      }),
      ofType(CurrencyActions.loadCurrenciesFailure),
      tap((action) => {
        this.errorHandler.handleError(action.error);
      })
    )
  }, { dispatch: false });

}
