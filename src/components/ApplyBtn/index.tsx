/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { getPoints } from "../../store/dbThunk.ts";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import useActions from "../../hooks/useActions.ts";
import createRanges from "./createRanges.ts";
import style from "./style.module.scss";

type ApplyBtnProps = {
  disabled: boolean;
};

const ApplyBtn = ({ disabled }: ApplyBtnProps) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const {
    setDiscretPoints,
    setDiscretRanges,
    toggleLoading,
    setConnectionNeed,
  } = useActions();

  const { activePoints, loaded, hasToConnect } = useTypedSelector(
    (state) => state.points
  );

  // const { username } = useTypedSelector((state) => state.auth);

  const {
    gasType,
    devices,
    minValue,
    period,
    selectedDiscret,
    selectedPeriod,
  } = useTypedSelector((state) => state.filters);

  // useEffect(() => {
  //   setConnectionNeed(true);
  // }, [devices, gasType, minValue, period, setConnectionNeed]);

  useEffect(() => {
    setConnectionNeed(true);
  }, [devices, gasType, minValue, period]);

  const onClickHandler = () => {
    if (devices.length && hasToConnect) {
      const query = { devices, gasType, minValue, period };
      toggleLoading(true);
      dispatch(getPoints(query));
      setConnectionNeed(false);
    }
    if (activePoints.length && selectedDiscret !== "none") {
      if (selectedPeriod === "all") {
        const firstPoint = activePoints[0];
        const lastPoint = activePoints[activePoints.length - 1];
        const localRanges = createRanges(
          [],
          firstPoint.date,
          lastPoint.date,
          activePoints,
          selectedDiscret
        );
        setDiscretRanges(hasToConnect ? [] : localRanges);
      }

      if (selectedPeriod !== "all") {
        const localRanges = createRanges(
          [],
          period[0],
          period[1],
          activePoints,
          selectedDiscret
        );

        setDiscretRanges(localRanges);
      }
    } else if (selectedDiscret === "none") {
      toggleLoading(true);
      setDiscretRanges([]);
      if (!hasToConnect) {
        setDiscretPoints(activePoints);
      }
    }

    if (loaded) {
      setTimeout(() => {
        toggleLoading(false);
      }, 400);
    }
  };

  return (
    <button
      type="button"
      className={`${style.applyBtn} ${disabled ? style.disabled : ""}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {t("applyBtn")}
    </button>
  );
};

export default ApplyBtn;
