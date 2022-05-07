import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { currencyFeatureKey, currencyReducer } from './currency/currency.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
  [currencyFeatureKey]: currencyReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
