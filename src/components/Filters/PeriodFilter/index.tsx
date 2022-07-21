import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { chevron } from "../../../img/exports.ts";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import useActions from "../../../hooks/useActions.ts";
import {
  formatDay,
  formatWeek,
  formatMonth,
  formatYear,
} from "./periodFormatter.ts";
import Period from "../Period/index.tsx";
import style from "./style.module.scss";

type PeriodFilterProps = {
  title: string;
  odd: boolean;
  periodTitles: string[];
  periodValues: string[];
};

const PeriodFilter = ({
  title,
  odd,
  periodTitles,
  periodValues,
}: PeriodFilterProps) => {
  const { t } = useTranslation();

  const radioFilterRef = useRef<HTMLInputElement>(null);

  const { setPeriod, setSelectedPeriod, setApplyButton } = useActions();

  const { selectedPeriod } = useTypedSelector((state) => state.filters);

  const [dropped, setDropped] = useState(false);

  const onDropdownHandler = () => {
    setDropped(!dropped);
  };

  const onClickHandler = (e: React.BaseSyntheticEvent) => {
    const date = new Date();
    const option = e.target.value;

    setSelectedPeriod(option);

    switch (option) {
      case "today": {
        setApplyButton(false);
        setPeriod(formatDay(date));
        break;
      }
      case "week": {
        setApplyButton(false);
        setPeriod(formatWeek(date));
        break;
      }
      case "month": {
        setApplyButton(false);
        setPeriod(formatMonth(date));
        break;
      }
      case "year": {
        setApplyButton(false);
        setPeriod(formatYear(date));
        break;
      }
      case "set": {
        setApplyButton(true);
        break;
      }
      default: {
        setApplyButton(false);
        setPeriod([]);
        break;
      }
    }
  };

  const componentHeight = radioFilterRef.current?.scrollHeight
    ? radioFilterRef.current?.scrollHeight
    : 0;

  return (
    <div
      className={`${style.radioFilter} ${odd ? style.odd : ""} `}
      style={{
        maxHeight: dropped ? componentHeight + 10 : 30,
      }}
      ref={radioFilterRef}
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
        {periodValues.map((item, index) => (
          <div className={style.radioItem} key={item}>
            <input
              type="radio"
              id={`${title}${item}`}
              name={`${title}filter`}
              value={item}
              className={`${style.radioButton}`}
              defaultChecked={item === selectedPeriod}
              onClick={onClickHandler}
            />
            <label
              htmlFor={`${title}${item}`}
              className={style.radioName}
              key={item}
            >
              {t(periodTitles[index])}
            </label>
          </div>
        ))}
        <Period disabled={selectedPeriod !== "set"} />
      </div>
    </div>
  );
};

export default PeriodFilter;
