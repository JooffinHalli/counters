import React, { FC } from "react";
import { useCounters } from "shared/hooks";
import s from "./index.module.scss";

const ROWS = {
  count: { text: 'Всего счетчиков:', field: 'length', postText:'' },
  summ: { text: 'Общая сумма:', field: 'summ', postText:'' },
  percent: { text: 'Процентов от максимума:', field: 'percentOfMax', postText:'%' }
} as const;

const rows = Object.values(ROWS);

export const Info: FC = () => {

  const Counters = useCounters();

  return (
    <div className={s.info}>
      <div>
        {rows.map(({ text, field, postText }) => (
          <div key={field} className={s.row}>
            <div className={s.field}>{text}</div>
            <div className={s.value}>{Counters[field]}{postText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
