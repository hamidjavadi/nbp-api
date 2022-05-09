export interface IAppState {
  themes: Theme[],
  errors: AppError[]
}

export type Theme = {
  name: string,
  file: string,
  selected: boolean
}

export enum AppActions {
  SetTheme = '[App] Set Theme',
  AddError = '[App] Add Error',
  ErrorShown = '[App] Error Shown',
}

export type AppError = {
  code: string,
  detail: string,
  summary: string,
  shown: boolean
}
