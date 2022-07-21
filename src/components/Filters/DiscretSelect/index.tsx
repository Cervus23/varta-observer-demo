/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useActions from "../../../hooks/useActions.ts";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import filterByDiscret from "./filterByDiscret.ts";
import style from "./style.module.scss";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const DiscretSelect = () => {
  const { t } = useTranslation();

  const { setDiscretPoints, toggleLoading } = useActions();

  const { discretRanges } = useTypedSelector((state) => state.filters);
  const { activePoints } = useTypedSelector((state) => state.points);

  const [selected, setSelected] = useState(0);

  const lastInRange = discretRanges.length - 1;
  const rangeLength = discretRanges.length;

  useEffect(() => {
    if (discretRanges.length) {
      toggleLoading(true);
      setDiscretPoints(filterByDiscret(discretRanges[0], activePoints));
    }
    setSelected(0);
  }, [discretRanges.length]);

  const onChangeHandler = (e: React.BaseSyntheticEvent) => {
    const index = parseInt(e.target.value, 10);
    toggleLoading(true);
    setDiscretPoints(filterByDiscret(discretRanges[index], activePoints));
    setSelected(index);
  };

  const onBackClick = () => {
    if (selected > 0) {
      toggleLoading(true);
      setDiscretPoints(
        filterByDiscret(discretRanges[selected - 1], activePoints)
      );
      setSelected(selected - 1);
    }
  };

  const onNextClick = () => {
    if (selected < lastInRange) {
      toggleLoading(true);
      setDiscretPoints(
        filterByDiscret(discretRanges[selected + 1], activePoints)
      );
      setSelected(selected + 1);
    }
  };

  return (
    <div className={style.selectionContainer}>
      <p className={style.title}>{t("discretSelect")}</p>

      <div className={style.discretSelection}>
        <button
          type="button"
          className={`${style.btn} ${style.back}`}
          onClick={onBackClick}
          disabled={selected === 0}
          aria-label="back"
        />
        {discretRanges.length > 0 ? (
          <select
            onChange={onChangeHandler}
            value={selected}
            className={style.selectionInput}
          >
            {discretRanges.map((item, index) => (
              <option value={index} key={item.rangeFrom + item.rangeTo}>
                {new Date(item.rangeFrom).toLocaleString("ua-UA", options)} -{" "}
                {new Date(item.rangeTo).toLocaleString("ua-UA", options)}
              </option>
            ))}
          </select>
        ) : (
          <p className={style.noSelection}>{t("emptyDiscret")}</p>
        )}

        <button
          type="button"
          className={`${style.btn} ${style.next}`}
          onClick={onNextClick}
          disabled={lastInRange === selected || rangeLength < 2}
          aria-label="next"
        />
      </div>
    </div>
  );
};

export default DiscretSelect;
