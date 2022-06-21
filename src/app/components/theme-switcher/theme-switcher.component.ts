import { Component, OnInit, SimpleChange } from '@angular/core';
import { Store } from '@ngrx/store';
import { setAppTheme } from 'src/app/store/app/app.actions';
import {
  selectAppAllThemes,
  selectAppCurrentTheme,
} from 'src/app/store/app/app.selectors';
import { Theme } from 'src/app/store/app/types';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  appAllThemes: Theme[] = [];
  selectedTheme: Theme | undefined;
  selectedThemeName: string | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectAppAllThemes).subscribe((themes) => {
      this.appAllThemes = themes;
    });

    this.store.select(selectAppCurrentTheme).subscribe((theme) => {
      this.selectedTheme = theme;
      this.selectedThemeName = theme?.name;
    });
  }

  onChange(event: any) {
    if (this.selectedTheme?.name != event.value) {
      let targetTheme = this.appAllThemes.find(
        (theme) => theme.name === event.value
      );

      if (targetTheme === undefined) targetTheme = this.appAllThemes[0];

      this.store.dispatch(setAppTheme({ theme: targetTheme }));
    }
  }
}
