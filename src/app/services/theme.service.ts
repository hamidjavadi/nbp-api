import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  setApplicationTheme(file: string) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = file;
  }
}
