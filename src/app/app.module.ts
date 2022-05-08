import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ErrorHandlerService } from './services/error-handler.service';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './components/app/app.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';

// Currency store
import { CurrencyEffects } from './store/currency/currency.effects';
import { currencyFeatureKey, currencyReducer } from './store/currency/currency.reducer';

// Store
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Pages
import { AboutComponent } from './pages/about/about.component';
import { IndexComponent } from './pages/index/index.component';

// Primeng
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
// import {  } from 'primeicons';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    IndexComponent,
    CurrencyTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    EffectsModule.forFeature([CurrencyEffects]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    MenubarModule,
    SelectButtonModule,
    StoreModule.forFeature(currencyFeatureKey, currencyReducer),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TableModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
