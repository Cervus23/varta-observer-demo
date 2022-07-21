import React from "react";
import useActions from "../../hooks/useActions.ts";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import DiscretSelect from "../Filters/DiscretSelect/index.tsx";
import UnitsSelector from "../UnitsSelector/index.tsx";
import style from "./style.module.scss";

const InfoBlock = () => {
  const { toggleInfoBlock } = useActions();

  const { isFiltersActive, isInfoBlockActive } = useTypedSelector(
    (state) => state.activityBar
  );

  return (
    <div
      className={`${style.infoBlock} 
      ${isFiltersActive ? "" : style.expandedLeft} ${
        isInfoBlockActive ? "" : style.collapsed
      }`}
    >
      <button
        type="button"
        aria-label="collapse infoBlock"
        className={`${style.collapser} ${
          isInfoBlockActive ? "" : style.expand
        }`}
        onClick={toggleInfoBlock}
      />
      <div className={style.infoElements}>
        <DiscretSelect />
        <UnitsSelector />
      </div>
    </div>
  );
};

export default InfoBlock;
