import { Counter } from '../types';
import { Action } from './../action';

const initState = {
  counters: [] as Counter[]
} as const;

type State = typeof initState;

export const counter = (s: State = initState, a: Action): State => {
  switch (a.type) {

    case 'ADD_COUNTER': {
      const sumOfPrevCounters = s.counters.reduce((acc, { value }) => (acc + value), 0);
      const newCounter = { value: sumOfPrevCounters, id: Math.random() * Math.random() };
      const counters = [...s.counters, newCounter];
      return { ...s, counters };
    }
    case 'DELETE_COUNTER': {
      const counters = s.counters.filter(c => a.payload.id !== c.id);
      return { ...s, counters };
    }
    case 'INCREMENT_COUNTER': {
      const counters = s.counters.map(c => (
        (a.payload.id === c.id) ? { ...c, value: c.value + 1 } : c
      ));
      return { ...s, counters };
    }
    case 'DECREMENT_COUNTER': {
      const counters = s.counters.map(c => (
        (a.payload.id === c.id) ? { ...c, value: c.value - 1 } : c
      ));
      return { ...s, counters };
    }
    case 'DELETE_FIRST': {
      const counters = [...s.counters];
      counters.shift();
      return { ...s, counters };
    }
    case 'DELETE_LAST': {
      const counters = [...s.counters];
      counters.pop();
      return { ...s, counters };
    }
    case 'DELETE_ALL': {
      return { ...s, counters: [] };
    }

    default: {
      return s;
    }
  }
};