import React, { FC } from "react";
import { MainButtons } from "./MainButtons";
import { Counters } from "./Counters";
import { Info } from "./Info";
import s from './index.module.scss';

export const App: FC = () => {

  return (
    <div className={s.app}>
      <div className={s.leftSide}>
        <Counters />
      </div>
      <div className={s.middleSide}>
        <MainButtons />
      </div>
      <div className={s.rightSide}>
        <Info />
      </div>
    </div>
  );
};