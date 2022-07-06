import React, { FC } from "react";
import { Obj } from "shared/types";
import { MainButton, BUTTON_TYPES } from "./MainButton";
import s from "./index.module.scss";

const btnTypes = Object.keys(BUTTON_TYPES) as Obj.Keys<typeof BUTTON_TYPES>;

export const MainButtons: FC = () => (
  <div className={s.mainButtons}>
    {btnTypes.map(btnType => <MainButton key={btnType} type={btnType} />)}
  </div>
);