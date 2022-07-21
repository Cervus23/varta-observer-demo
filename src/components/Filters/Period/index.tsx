/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useActions from "../../../hooks/useActions.ts";
import useTypedSelector from "../../../hooks/useTypedSelector.ts";
import style from "./style.module.scss";

type PeriodProps = {
  disabled: boolean;
};

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "UTC",
};

const Period = ({ disabled }: PeriodProps) => {
  const { t } = useTranslation();

  const { setPeriod, setApplyButton } = useActions();
  const { period } = useTypedSelector((state) => state.filters);
  const { language } = useTypedSelector((state) => state.settings);

  const fromDateRef = useRef<HTMLInputElement>(null);
  const toDateRef = useRef<HTMLInputElement>(null);

  const [fromDateMessage, setFromDateMessage] = useState("");
  const [toDateMessage, setToDateMessage] = useState("");

  const [formMessage, setFormMessage] = useState("");

  let fromDate = fromDateRef.current?.valueAsNumber;
  let toDate = toDateRef.current?.valueAsNumber;

  useEffect(() => {
    if (fromDate && toDate) {
      if (fromDate > 0 && toDate > 0 && fromDate >= toDate) {
        setFormMessage(t("errorMessages.beforeStart"));
        setApplyButton(true);
      } else if (
        (fromDate > 0 && toDate === 0) ||
        (fromDate === 0 && toDate > 0)
      ) {
        setFormMessage("");
        setApplyButton(true);
      } else {
        setFormMessage("");
        setApplyButton(false);
      }
    }
    if (disabled) {
      setFromDateMessage("");
      setToDateMessage("");
      setFormMessage("");
    }
  }, [fromDate, toDate, period, disabled, language]);

  useEffect(() => {
    if (fromDateMessage) {
      setFromDateMessage(t("errorMessages.noStart"));
    }
    if (toDateMessage) {
      setToDateMessage(t("errorMessages.noEnd"));
    }
  }, [language]);

  const onFromDateHandler = () => {
    fromDate = fromDateRef.current?.valueAsNumber;

    if (Number.isNaN(fromDate)) {
      setFromDateMessage(t("errorMessages.noStart"));
      setApplyButton(true);
    } else {
      setFromDateMessage("");
    }
  };

  const onToDateHandler = () => {
    toDate = toDateRef.current?.valueAsNumber;

    if (Number.isNaN(toDate)) {
      setToDateMessage(t("errorMessages.noEnd"));
      setApplyButton(true);
    } else {
      setToDateMessage("");
    }
  };

  const onSubmitHandler = () => {
    fromDate = fromDateRef.current?.valueAsNumber;
    toDate = toDateRef.current?.valueAsNumber;

    if (fromDate && toDate && fromDate < toDate) {
      const formFrom = Date.parse(
        new Date(fromDate).toLocaleString("en-EN", options)
      );
      const formTo = new Date(
        new Date(toDate).toLocaleString("en-EN", options)
      ).getTime();

      setPeriod([formFrom, formTo]);

      setApplyButton(false);
    } else {
      setApplyButton(true);
    }
  };

  return (
    <form className={style.periodForm} onChange={onSubmitHandler}>
      <span className={`${style.errMessage} ${style.errFormMessage}`}>
        {formMessage}
      </span>
      <div className={`${style.periodRange} ${style.rangeFrom}`}>
        <span
          className={`${style.periodTitle} ${
            fromDateMessage || formMessage ? style.errText : ""
          } ${disabled ? style.disabled : ""}`}
        >
          {t("periodSetter.from")}
        </span>
        <input
          type="datetime-local"
          className={`${style.dateInput} ${
            fromDateMessage || formMessage ? style.errInput : ""
          }`}
          disabled={disabled}
          ref={fromDateRef}
          onBlur={onFromDateHandler}
        />
        <span className={`${style.errMessage} ${style.dateErr}`}>
          {fromDateMessage}
        </span>
      </div>
      <div className={`${style.periodRange} ${style.rangeTo}`}>
        <span
          className={`${style.periodTitle} ${
            toDateMessage || formMessage ? style.errText : ""
          } ${disabled ? style.disabled : ""}`}
        >
          {t("periodSetter.to")}
        </span>
        <input
          type="datetime-local"
          className={`${style.dateInput} ${
            toDateMessage || formMessage ? style.errInput : ""
          }`}
          disabled={disabled}
          ref={toDateRef}
          onBlur={onToDateHandler}
        />
        <span className={`${style.errMessage} ${style.dateErr}`}>
          {toDateMessage}
        </span>
      </div>
    </form>
  );
};

export default Period;
