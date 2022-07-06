import React, { FC } from "react";
import { useCounters, useTypeDispatch } from "shared/hooks";
import { addCounter, deleteAll, deleteFirst, deleteLast } from "shared/store/counter/action";
import s from './index.module.scss';

export const BUTTON_TYPES = {
  addOne: { text: "Добавить счетчик", action: addCounter },
  deleteFirst: { text: "Удалить первый", action: deleteFirst },
  deleteLast: { text: "Удалить последний", action: deleteLast },
  deleteAll: { text: "Удалить все", action: deleteAll }
};

export const MainButton: FC<{

  type: keyof typeof BUTTON_TYPES;

}> = ({ type }) => {

  const dispatch = useTypeDispatch();

  const { isMax, hasCounters } = useCounters();

  const isAdder = type === 'addOne';
  const isDeleteAll = type === 'deleteAll';

  if (!isAdder && !hasCounters) return <div className={s.empty}></div>;
  if (isAdder && isMax) return <div className={s.max}>Достигнут максимум</div>;
  if (!isDeleteAll && !isAdder && isMax) return <div className={s.empty}></div>;

  const onClick = () => {
    dispatch(BUTTON_TYPES[type].action());
  }

  return (
    <div className={s[type]} onClick={onClick}>
      <div>{BUTTON_TYPES[type].text}</div>
    </div>
  );
};