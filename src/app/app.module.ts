import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import * as fromCurrency from './store/currency/currency.reducer';
import { CurrencyEffects } from './store/currency/currency.effects';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ErrorHandlerService } from './services/error-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forFeature([CurrencyEffects]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    StoreModule.forFeature(fromCurrency.currencyFeatureKey, fromCurrency.currencyReducer),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
