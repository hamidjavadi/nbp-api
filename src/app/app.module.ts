import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './components/app/app.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

// Store
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Currency store
import { CurrencyEffects } from './store/currency/currency.effects';
import { currencyFeatureKey, currencyReducer } from './store/currency/currency.reducer';

// App Store
import { appFeatureKey, appReducer } from './store/app/app.reducer';
import { AppEffects } from './store/app/app.effects';

// Pages
import { AboutComponent } from './pages/about/about.component';
import { IndexComponent } from './pages/index/index.component';

// Primeng
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

// Services
import { ErrorHandlerService } from './services/error-handler.service';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    IndexComponent,
    CurrencyTableComponent,
    ThemeSwitcherComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    FormsModule,
    EffectsModule.forFeature([CurrencyEffects, AppEffects]),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    MenubarModule,
    SelectButtonModule,
    StoreModule.forFeature(currencyFeatureKey, currencyReducer),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TableModule,
    StoreModule.forFeature(appFeatureKey, appReducer)
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
