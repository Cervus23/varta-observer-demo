import React from "react";
import { useTranslation } from "react-i18next";
import useActions from "../../hooks/useActions.ts";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import style from "./style.module.scss";

const UnitsSelector = () => {
  const { t } = useTranslation();

  const { allUnits, units } = useTypedSelector((state) => state.filters);

  const { setUnits } = useActions();

  const onClickHandler = (e: React.BaseSyntheticEvent) => {
    setUnits(e.target.value);
  };

  return (
    <div className={style.unitsSelector}>
      <p className={style.unitsTitle}>{t(`units.title`)}</p>
      <div className={style.unitsSelection}>
        {allUnits.map((item, index) => (
          <div className={style.radioItem} key={item}>
            <input
              type="radio"
              id={`${item}Selector`}
              name={`${item}`}
              value={item}
              className={`${style.radioButton}`}
              checked={item === units}
              onClick={onClickHandler}
              onChange={onClickHandler}
            />
            <label
              htmlFor={`${item}Selector`}
              className={style.radioName}
              key={item}
              style={
                allUnits[index] === "vol" ? { textTransform: "lowercase" } : {}
              }
            >
              {t(`units.${allUnits[index]}`)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitsSelector;
