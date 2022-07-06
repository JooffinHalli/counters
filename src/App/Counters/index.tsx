import React, { FC } from "react";
import { useTypeSelector } from "shared/hooks";
import { selectCounters } from "shared/store/counter/selector";
import { Counter } from "./Counter";

export const Counters: FC = () => {

  const counters = useTypeSelector(selectCounters);

  return (
    <div>
      {counters.map(({ value, id }, i) => (
        <Counter
          key={id}
          value={value}
          id={id}
          order={i + 1}
        />
      ))}
    </div>
  );
};