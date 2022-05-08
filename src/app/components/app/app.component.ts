import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ThemeService } from 'src/app/services/theme.service';
import { setAppTheme } from 'src/app/store/app/app.actions';
import { selectAppAllThemes, selectAppCurrentTheme } from 'src/app/store/app/app.selectors';
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
    private themeService: ThemeService
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
  }
}
