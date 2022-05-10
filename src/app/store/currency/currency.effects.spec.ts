import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

import { CurrencyEffects } from './currency.effects';

describe('CurrencyEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrencyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}, {}),
      ],
      providers: [
        CurrencyEffects,
        MessageService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CurrencyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeInstanceOf(CurrencyEffects);
  });
});
