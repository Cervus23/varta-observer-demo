/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { chevron } from "../../../img/exports.ts";
import useActions from "../../../hooks/useActions.ts";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import style from "./style.module.scss";

type ByValueFilterProps = {
  title: string;
  odd: boolean;
  value: number;
  disabled: boolean;
};

const ByValueFilter = ({ title, odd, value, disabled }: ByValueFilterProps) => {
  const { t } = useTranslation();

  const { gasType, allUnits } = useTypedSelector((state) => state.filters);

  const { setValue, setUnits } = useActions();

  const units = [
    t(`units.${allUnits[0]}`),
    t(`units.${allUnits[1]}`),
    t(`units.${allUnits[2]}`),
  ];

  const byValueFilterRef = useRef<HTMLInputElement>(null);
  const gasValueRef = useRef<HTMLInputElement>(null);

  const [dropped, setDropped] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const inputedValue = gasValueRef.current?.valueAsNumber;
    if (!inputedValue) {
      setValue(0);
    } else {
      switch (selected) {
        case 1: {
          setValue(inputedValue * 10000);
          break;
        }
        case 2: {
          if (gasType === "METHANE") {
            setValue(inputedValue * 500);
          } else if (gasType === "PROPANE") {
            setValue(inputedValue * 200);
          }
          break;
        }
        default: {
          setValue(inputedValue);
          break;
        }
      }
    }
  }, [selected, gasType]);

  const onDropdownHandler = () => {
    setDropped(!dropped);
  };

  const onChangeHandler = (e: React.BaseSyntheticEvent) => {
    const param = e.target.valueAsNumber;
    if (!param) {
      setValue(0);
    } else {
      switch (selected) {
        case 1: {
          setValue(param * 10000);
          break;
        }
        case 2: {
          if (gasType === "METHANE") {
            setValue(param * 500);
          } else if (gasType === "PROPANE") {
            setValue(param * 200);
          }
          break;
        }
        default: {
          setValue(param);
          break;
        }
      }
    }
  };

  const onSelectHandler = (e: React.BaseSyntheticEvent) => {
    const index = parseInt(e.target.value, 10);
    setUnits(allUnits[index]);
    setSelected(index);
  };

  const componentHeight = byValueFilterRef.current?.scrollHeight
    ? byValueFilterRef.current?.scrollHeight
    : 0;

  return (
    <div
      className={`${style.byValue} ${odd ? style.odd : ""}`}
      style={{
        maxHeight: dropped ? componentHeight + 10 : 30,
      }}
      ref={byValueFilterRef}
    >
      <div
        className={style.filterHeader}
        onClick={onDropdownHandler}
        onKeyDown={onDropdownHandler}
        role="button"
        tabIndex={0}
      >
        <p className={style.filterTitle}>{t(`filterTitles.${title}`)}</p>
        <img
          src={chevron}
          alt="dropdown"
          className={`${style.chevronImg} ${dropped ? style.dropdown : ""}`}
        />
      </div>
      <div className={style.filterMain}>
        <input
          type="number"
          className={style.filterInput}
          ref={gasValueRef}
          disabled={disabled}
          placeholder="0"
          onBlur={onChangeHandler}
        />
        <select
          onChange={onSelectHandler}
          id="selector"
          className={style.unitsSelector}
        >
          {units.map((unit, index) => (
            <option value={index} key={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ByValueFilter;
