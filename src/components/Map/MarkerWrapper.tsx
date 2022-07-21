import React, { memo } from "react";
import { connect } from "react-redux";
import { InfoWindow, Marker, MarkerProps } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import { LightPoint } from "../../types/points.ts";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import useActions from "../../hooks/useActions.ts";
import { blue, green, yellow, orange, red } from "../../img/exports.ts";

const pointIcons = { blue, green, yellow, orange, red };

const MarkerWrapper = memo(
  ({
    point,
    position,
    options,
    icon,
    zIndex,
    clusterer,
    infoId,
  }: MarkerProps & {
    point: LightPoint;
    infoId: string;
  }) => {
    const { t } = useTranslation();

    const { units } = useTypedSelector((state) => state.filters);

    const { setInfoId } = useActions();

    const onClickHandler = () => setInfoId(point.ID);

    const displayValue = (value: number, gasType: string) => {
      const part = `${t(`units.${units}`)}`;
      let result = `${value}`;
      switch (units) {
        case "vol": {
          result = `${value / 10000}`;
          break;
        }
        case "lfl": {
          result = gasType === "METHANE" ? `${value / 500}` : `${value / 200}`;
          break;
        }
        default: {
          break;
        }
      }
      return `${result} ${part}`;
    };

    return (
      <Marker
        position={position}
        options={options}
        icon={pointIcons[icon]}
        zIndex={zIndex}
        clusterer={clusterer}
        onClick={onClickHandler}
      >
        {point.ID === infoId && (
          <InfoWindow position={position} onCloseClick={() => setInfoId("")}>
            <div>
              {t("point.deviceId")}: {point.deviceId}
              <br />
              {t("point.date")}/{t("point.time")}:{" "}
              {new Date(point.date).toLocaleString()} <br />
              {t("point.value")}: {t(`point.gasType.${point.gasType}`)}{" "}
              {displayValue(point.gasValue, point.gasType)}
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  },
  /* Checking if the component needs to be re-rendered.
   * If returns [true] - component is NOT re-rendered
   * If returns [false] - component is re-rendered
   */
  (prevProps, nextProps) => {
    const prevInfoDisplay = prevProps.point.ID === prevProps.infoId;
    const nextInfoDisplay = nextProps.point.ID === nextProps.infoId;

    // Re-render only if the info popup display state changed - rerender only this point.
    return prevInfoDisplay === nextInfoDisplay;
  }
);

const mapStateToProps = ({
  activePoint: { infoId },
}: {
  activePoint: { infoId: string };
}) => ({ infoId });

export default connect(mapStateToProps)(MarkerWrapper);
