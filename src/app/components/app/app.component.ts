import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ThemeService } from 'src/app/services/theme.service';
import { AppErrorShown, setAppTheme } from 'src/app/store/app/app.actions';
import { selectAppAllThemes, selectAppCurrentTheme, selectAppErrorsToShow } from 'src/app/store/app/app.selectors';
import { Theme } from 'src/app/store/app/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nbp';

  appAllThemes: Theme[] = [];

  constructor(
    private store: Store,
    private themeService: ThemeService,
    private errorService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.store.select(selectAppAllThemes).subscribe(themes => {
      this.appAllThemes = themes;
    })

    // Select and check the app theme, if the theme was not set, so set it!
    this.store.select(selectAppCurrentTheme).subscribe(theme => {
      if (!theme) {
        this.store.dispatch(setAppTheme({ theme: this.appAllThemes[0] }))
      } else {
        this.themeService.setApplicationTheme(theme.file);
      }
    })

    // Select and show application errors
    this.store.select(selectAppErrorsToShow).subscribe((errors) => {
      errors.forEach(error => {
        this.errorService.showError(error.summary, error.detail);
        this.store.dispatch(AppErrorShown({ error: error }));
      })
    })
  }
}
