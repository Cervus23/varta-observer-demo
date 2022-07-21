import React from "react";
import { useTranslation } from "react-i18next";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import style from "./style.module.scss";

const LoadWindow = () => {
  const { t } = useTranslation();

  const { isFiltersActive, isInfoBlockActive } = useTypedSelector(
    (state) => state.activityBar
  );
  const { mode } = useTypedSelector((state) => state.settings);
  // const { status } = useTypedSelector((state) => state.importer);

  const { isLoadingActive } = useTypedSelector((state) => state.loadingScreen);

  return isLoadingActive ? (
    <div
      className={`${style.underlay} ${
        isFiltersActive ? "" : style.expandedLeft
      } ${isInfoBlockActive ? "" : style.expandedDown} ${
        mode === "importing" ? style.noUnderlay : ""
      }`}
    >
      <div className={style.loadWindow}>
        <div
          className={`${style.outerCircle} ${
            mode === "importing" ? style.outerImporting : ""
          }`}
        >
          <div className={style.topLeftSegment} />
          <div className={style.bottomRightSegment} />
        </div>
        <div
          className={`${style.iconBckgrnd} ${
            mode === "importing" ? style.iconImporting : ""
          }`}
        >
          <div className={style.iconBack}>
            <div className={style.iconFront} />
          </div>
        </div>
        <div className={style.textContainer}>
          <p
            className={`${style.loadText} ${
              mode === "importing" ? style.importing : ""
            }`}
          >
            {/* {mode === "importing"
              ? t(`importer.loader.${status}`)
              : t("loading")} */}
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoadWindow;
