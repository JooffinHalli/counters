import { SelectorFromNamespace } from './../types/index';
import { combineReducers, createStore } from 'redux';

import * as Counter from './counter';

const rootReducer = combineReducers({
  counter: Counter.reducer
});

export const store = createStore(rootReducer);

export type Store = typeof store;
export type GetState = typeof store.getState;
export type State = ReturnType<GetState>;
export type Dispatch = typeof store.dispatch;
export type Selector = SelectorFromNamespace<
  | typeof Counter.selector
>;