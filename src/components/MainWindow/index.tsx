/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import useActions from "../../hooks/useActions.ts";
import createRanges from "../../components/ApplyBtn/createRanges.ts";
import Map from "../../components/Map/index.tsx";
import style from "./style.module.scss";

const MainWindow = () => {
  const { loaded, activePoints, discretPoints } = useTypedSelector(
    (state) => state.points
  );

  const { period, selectedDiscret, selectedPeriod } = useTypedSelector(
    (state) => state.filters
  );

  const { toggleLoad, setDiscretPoints, setDiscretRanges, setConnection } =
    useActions();

  const checkConnection = async () => {
    await fetch("https://maps.googleapis.com/maps/api/js", {
      method: "HEAD",
      mode: "no-cors",
    })
      .then((response) => {
        if (response.ok) {
          setConnection("ok");
        }
        return response;
      })
      .catch(() => {
        setConnection("failed");
      });
  };

  useEffect(() => {
    checkConnection();
  }, []);

  useEffect(() => {
    if (selectedDiscret === "none") {
      setDiscretPoints(activePoints);
    }
    if (discretPoints.length) {
      toggleLoad(true);
    }
  }, [activePoints, discretPoints]);

  useEffect(() => {
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
        setDiscretRanges(localRanges);
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
    } else {
      setDiscretRanges([]);
    }
  }, [activePoints]);

  const result = (
    <div className={style.mainWindow}>
      {loaded ? <Map /> : <div className={style.empty} />}
    </div>
  );
  return result;
};

export default MainWindow;
