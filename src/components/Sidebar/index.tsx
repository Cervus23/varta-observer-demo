import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getDevices } from "../../store/dbThunk.ts";

import GastypeFilter from "../../components/Filters/GastypeFilter/index.tsx";
import DeviceFilter from "../../components/Filters/DeviceFilter/index.tsx";
import ByValueFilter from "../../components/Filters/ByValueFilter/index.tsx";
import PeriodFilter from "../../components/Filters/PeriodFilter/index.tsx";
import DiscretFilter from "../../components/Filters/DiscretFilter/index.tsx";
import ApplyBtn from "../../components/ApplyBtn/index.tsx";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import useActions from "../../hooks/useActions.ts";
import style from "./style.module.scss";

const titles = {
  gasTypes: ["gasType.methane", "gasType.propane"],
  discret: [
    "discretization.month",
    "discretization.week",
    "discretization.day",
    "discretization.none",
  ],
  period: [
    "period.allTime",
    "period.today",
    "period.thisWeek",
    "period.thisMonth",
    "period.thisYear",
    "period.setPeriod",
  ],
};

const Sidebar = () => {
  const dispatch = useDispatch();

  const { allGasTypes, minValue, allDiscret, allPeriod } = useTypedSelector(
    (state) => state.filters
  );

  const { applyBtn } = useTypedSelector((state) => state.filters);
  const { isFiltersActive } = useTypedSelector((state) => state.activityBar);
  // const { username } = useTypedSelector((state) => state.auth);

  const [disabled, setDisabled] = useState(true);

  const { toggleFilters } = useActions();

  useEffect(() => {
    dispatch(getDevices());
    setDisabled(false);
  }, [dispatch]);

  return (
    <div>
      <div
        className={`${style.sidebar} ${disabled ? style.diasbled : ""} ${
          isFiltersActive ? "" : style.collapse
        }`}
      >
        <GastypeFilter
          title="gasType"
          odd
          titlesArray={titles.gasTypes}
          values={allGasTypes}
        />
        <DeviceFilter title="devices" odd={false} />
        <ByValueFilter
          title="minValue"
          odd
          value={minValue}
          disabled={disabled}
        />
        <DiscretFilter
          title="discretization"
          odd={false}
          discretTitles={titles.discret}
          discretValues={allDiscret}
        />
        <PeriodFilter
          title="period"
          odd
          periodTitles={titles.period}
          periodValues={allPeriod}
        />
        <ApplyBtn disabled={applyBtn} />
      </div>
      <button
        type="button"
        aria-label="collapse filter"
        className={`${style.collapser} ${isFiltersActive ? "" : style.expand}`}
        onClick={toggleFilters}
      />
    </div>
  );
};

export default Sidebar;
