import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrencyEffects } from './currency.effects';

describe('CurrencyEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrencyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrencyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CurrencyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
