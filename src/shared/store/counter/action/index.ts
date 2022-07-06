import { ActionFromNamespace } from 'shared/types';
import * as AC from '../actionCreator';

// need this layer for future: extra logic, thunks, etc.

export const addCounter = AC.addCounter;
export const deleteCounter = AC.deleteCounter;
export const incrementCounter = AC.incrementCounter;
export const decrementCounter = AC.decrementCounter;
export const deleteFirst = AC.deleteFirst;
export const deleteLast = AC.deleteLast;
export const deleteAll = AC.deleteAll;

export type Action = ActionFromNamespace<typeof AC>;