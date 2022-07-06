import React, { FC } from "react";
import { useCounters, useTypeDispatch } from "shared/hooks";
import {
  decrementCounter,
  deleteCounter,
  incrementCounter
} from "shared/store/counter/action";
import s from "./index.module.scss";
import cn from 'classnames';

const TYPE = {
  plus: { text: "+", action: incrementCounter },
  minus: { text: "-", action: decrementCounter },
  cross: { text: "x", action: deleteCounter }
} as const;

export const Button: FC<{

  type: keyof typeof TYPE;
  id: number;

}> = ({ type, id }) => {

  const dispatch = useTypeDispatch();

  const { isMax } = useCounters();

  if (isMax) return null;

  const onClick = () => {
    dispatch(TYPE[type].action(id));
  };

  const classes = cn({
    [s.button]: true,
    [s[type]]: true
  })

  return (
    <button className={classes} onClick={onClick}>
      {TYPE[type].text}
    </button>
  );
};
