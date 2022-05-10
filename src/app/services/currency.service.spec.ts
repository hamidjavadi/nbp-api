import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { CurrencyService } from './currency.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({}, {}),
      ],
      providers: [
        MessageService,
      ]
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeInstanceOf(CurrencyService);
  });
});
