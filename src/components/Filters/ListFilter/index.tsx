import { useState } from "react";
import { chevron } from "../../../img/exports.ts";
import style from "./style.module.scss";

type ByValueFilterProps = {
  title: string;
  odd: boolean;
  nameList: string[];
  valueList: string[];
  disabled: boolean;
};

const ListFilter = ({
  title,
  odd,
  nameList,
  valueList,
  disabled,
}: ByValueFilterProps) => {
  const [dropped, setDropped] = useState(false);

  const onDropdownHandler = () => {
    setDropped(!dropped);
  };
  return (
    <div
      className={`${style.byValue} ${odd ? style.odd : ""} ${
        dropped ? style.dropped : ""
      }`}
    >
      <div
        className={style.filterHeader}
        onClick={onDropdownHandler}
        onKeyDown={onDropdownHandler}
        role="button"
        tabIndex={0}
      >
        <p className={style.filterTitle}>{title}</p>
        <img
          src={chevron}
          alt="dropdown"
          className={`${style.chevronImg} ${dropped ? style.dropdown : ""}`}
        />
      </div>
      <div className={style.filterMain}>
        <select id="list" className={style.filterInput} disabled={disabled}>
          <option>Select All</option>
          {valueList.map((listItem, index) => (
            <option value={listItem} key={listItem}>
              {nameList[index]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ListFilter;
