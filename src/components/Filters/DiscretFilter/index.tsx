/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { chevron } from "../../../img/exports.ts";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import useActions from "../../../hooks/useActions.ts";
import getMaxDiscret from "./getMaxDiscret.ts";
import style from "./style.module.scss";

type DiscretFilterProps = {
  title: string;
  odd: boolean;
  discretTitles: string[];
  discretValues: string[];
};

const DiscretFilter = ({
  title,
  odd,
  discretTitles,
  discretValues,
}: DiscretFilterProps) => {
  const { t } = useTranslation();

  const radioFilterRef = useRef<HTMLInputElement>(null);

  const { setSelectedDiscret, setValidDiscret } = useActions();

  const { period, allDiscret, validDiscret, selectedDiscret } =
    useTypedSelector((state) => state.filters);

  const [dropped, setDropped] = useState(false);

  useEffect(() => {
    if (period.length > 0) {
      const maxDiscret = getMaxDiscret(period);
      const discretIndex = allDiscret.indexOf(selectedDiscret);
      setValidDiscret(maxDiscret);

      if (maxDiscret - 1 >= discretIndex) {
        setSelectedDiscret("none");
      }
    }
  }, [period, allDiscret, selectedDiscret]);

  const onDropdownHandler = () => {
    setDropped(!dropped);
  };

  const onClickHandler = (e: React.BaseSyntheticEvent) => {
    setSelectedDiscret(e.target.value);
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
        {discretValues.map((item, index) => (
          <div className={style.radioItem} key={item}>
            <input
              type="radio"
              id={`${title}${item}`}
              name={`${title}filter`}
              value={item}
              className={`${style.radioButton}`}
              checked={item === selectedDiscret}
              onClick={onClickHandler}
              onChange={onClickHandler}
              disabled={validDiscret[index] === "disabled"}
            />
            <label
              htmlFor={`${title}${item}`}
              className={`${style.radioName} ${
                validDiscret[index] === "disabled" ? style.disabled : ""
              }`}
              key={item}
            >
              {t(discretTitles[index])}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscretFilter;
