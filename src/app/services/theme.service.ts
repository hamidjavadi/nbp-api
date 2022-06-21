import { DOCUMENT } from '@angular/common';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Inject, Injectable } from '@angular/core';
import { Theme } from '../store/app/types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setApplicationTheme(theme: Theme) {
    this.document.querySelectorAll('.css-theme').forEach((item) => {
      const stylesheet = item as unknown as StyleSheet;
      const htmlElement = item as HTMLElement;
      const dataset = htmlElement.dataset;

      if (dataset['name']) {
        if (dataset['name'] === theme.name) {
          stylesheet.disabled = false;
        } else {
          stylesheet.disabled = true;
        }
      }
    });
  }
}
