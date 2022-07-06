import { State } from "shared/store";

export const selectCounters = (s: State) => s.counter.counters;
export const stateHasCounters = (s: State) => !!s.counter.counters.length;