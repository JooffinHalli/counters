import { MAX_VALUE } from "shared/constants";
import { Counter } from "shared/store/counter/types";

export const isMaxNum = (num: number) => num >= MAX_VALUE;
export const doesMultiplyFour = (num: number) => num % 4 === 0;

export const countSumm = (counters: Counter[]) => (
  counters.reduce((acc, { value }) => (acc + value), 0)
);
export const isMax = (counters: Counter[]) => isMaxNum(countSumm(counters));