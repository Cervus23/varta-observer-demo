import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { chevron } from "../../../img/exports.ts";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import useActions from "../../../hooks/useActions.ts";
import style from "./style.module.scss";

type GastypeFilterProps = {
  title: string;
  odd: boolean;
  titlesArray: string[];
  values: string[];
};

const GastypeFilter = ({
  title,
  odd,
  titlesArray,
  values,
}: GastypeFilterProps) => {
  const { t } = useTranslation();

  const radioFilterRef = useRef<HTMLInputElement>(null);

  const { gasType } = useTypedSelector((state) => state.filters);

  const { setGastype } = useActions();

  const [dropped, setDropped] = useState(false);

  const onDropdownHandler = () => {
    setDropped(!dropped);
  };

  const onClickHandler = (e: React.BaseSyntheticEvent) => {
    setGastype(e.target.value);
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
        {values.map((item, index) => (
          <div className={style.radioItem} key={item}>
            <input
              type="radio"
              id={`${title}${item}`}
              name={`${title}filter`}
              value={item}
              className={`${style.radioButton}`}
              checked={item === gasType}
              onClick={onClickHandler}
              onChange={onClickHandler}
            />
            <label
              htmlFor={`${title}${item}`}
              className={style.radioName}
              key={item}
            >
              {t(titlesArray[index])}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GastypeFilter;
