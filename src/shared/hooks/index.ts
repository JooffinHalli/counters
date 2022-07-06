import { useDispatch, useSelector } from "react-redux";
import { PERCENT_OF_MAX } from "shared/constants";
import { Dispatch, Selector, State } from "shared/store";
import { countSumm, isMax } from "shared/utils";

// can dispatch only through "action creators" or the actions returned by "action creators"
export const useTypeDispatch = () => useDispatch<Dispatch>();

// can select only through "selectors" or values returned by "selectors"
export const useTypeSelector = <T extends Selector>(cb: T) => useSelector<State, ReturnType<T>>(cb as any);

// returns immutable state
export const useAppState = () => useSelector<State, State>(s => s);

// return counters info
export const useCounters = () => {
  const { counters } = useAppState().counter;

  const summ = countSumm(counters);
  const percentOfMax = ~~(summ / PERCENT_OF_MAX);

  return {
    counters,
    hasCounters: !!counters.length,
    length: counters.length,
    summ,
    isMax: isMax(counters),
    percentOfMax: (percentOfMax > 100) ? 100 : percentOfMax
  }
}