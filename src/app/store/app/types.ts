export interface IAppState {
  themes: Theme[]
}

export type Theme = {
  name: string,
  file: string,
  selected: boolean
}

export enum ThemeActions {
  SetTheme = '[Theme] Set Theme'
}
