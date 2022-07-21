/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import useActions from "../../../hooks/useActions.ts";
import { chevron } from "../../../img/exports.ts";
import style from "./style.module.scss";

type DeviceFilterProps = {
  title: string;
  odd: boolean;
};

const DeviceFilter = ({ title, odd }: DeviceFilterProps) => {
  const { t } = useTranslation();

  const checkFilterRef = useRef<HTMLInputElement>(null);
  const { availableDevices } = useTypedSelector((state) => state.devices);
  const { devices } = useTypedSelector((state) => state.filters);

  const [dropped, setDropped] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const { setDevices } = useActions();

  const handleSelectAll = () => {
    if (isCheckAll) {
      setDevices([]);
    } else {
      setDevices(availableDevices);
    }
    setIsCheckAll(!isCheckAll);
  };

  const selectHandler = (e: React.BaseSyntheticEvent) => {
    const selectedDevices = Array.from(e.target.selectedOptions).map(
      (option: any) => {
        return option.value;
      }
    );

    if (selectedDevices.length === availableDevices.length) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }

    setDevices(selectedDevices);
  };

  const componentHeight = checkFilterRef.current
    ? checkFilterRef.current.scrollHeight
    : 0;

  return (
    <div
      className={`${style.checkFilter} ${odd ? style.odd : ""}`}
      style={{
        maxHeight: dropped ? componentHeight + 10 : 30,
      }}
      ref={checkFilterRef}
    >
      <div
        className={style.filterHeader}
        onClick={() => setDropped(!dropped)}
        onKeyDown={() => setDropped(!dropped)}
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
        <select
          onChange={selectHandler}
          value={devices}
          multiple
          className={style.selectBox}
        >
          <option value="placeholder" disabled className={style.option}>
            {t("devices.placeholder")}
          </option>
          {availableDevices.map((item) => (
            <option value={item} key={item} className={style.option}>
              {item}
            </option>
          ))}
        </select>
        <div className={style.checkItem}>
          <input
            type="checkbox"
            id={`${title}SelectAll`}
            className={style.checkBox}
            checked={isCheckAll}
            onChange={handleSelectAll}
            disabled={!availableDevices.length}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={`${title}SelectAll`}
            className={`${style.checkName} ${
              !availableDevices.length ? style.disabled : ""
            }`}
          >
            {t(`${title}.selectAll`)}
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeviceFilter;
