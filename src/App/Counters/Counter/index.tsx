import React, { FC, useEffect, useState } from "react";
import { useCounters, useTypeDispatch } from "shared/hooks";
import { incrementCounter } from "shared/store/counter/action";
import { doesMultiplyFour } from "shared/utils";
import { Button } from "./Button";
import s from './index.module.scss';
import cn from "classnames";

export const Counter: FC<{

  value: number;
  id: number;
  order: number;

}> = ({ value, id, order }) => {

  const dispatch = useTypeDispatch();

  const { isMax, summ } = useCounters();

  const [intervalId, setIntervalId] = useState<any>();
  
  const increment = () => dispatch(incrementCounter(id));
  const startIncrementation = () => setInterval(increment, 1000);
  
  const isFourth = doesMultiplyFour(order);

  useEffect(() => {
    if (isMax) clearInterval(intervalId);
  }, [summ]);
  
  useEffect(() => {
    if (isFourth) setIntervalId(startIncrementation());
    else clearInterval(intervalId);
  }, [order]);

  const orderClasses = cn({
    [s.order]: true,
    [s.red]: isFourth
  });

  return (
    <div
      title={value.toString()}
      className={s.counter}
    >
      <div className={orderClasses}>{order}</div>
      {!isFourth && <Button type="minus" id={id} />}
      <div className={s.value}>{value}</div>
      {!isFourth && <Button type="plus" id={id} />}
      <div className={s.cross}>
        <Button type="cross" id={id} />
      </div>
    </div>
  );
};