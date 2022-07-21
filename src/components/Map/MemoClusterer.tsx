import React, { memo } from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import {
  ClusterIconStyle,
  TCalculator,
} from "@react-google-maps/marker-clusterer";
import uniqueID from "../../uniqueID";
import { LightPoint } from "../../types/points.ts";
import MarkerWrapper from "./MarkerWrapper.tsx";
// import style from './style.module.scss';

type MemoClusterProps = {
  maxZoom: number;
  styles: ClusterIconStyle[];
  calculator: TCalculator;
  points: LightPoint[];
  onLoad: () => void;
};

const sumDates = (points) =>
  points.reduce((result, point) => result + point.date, 0);

const comparePoints = (set1, set2) => sumDates(set1) === sumDates(set2);

const MemoClusterer = memo(
  ({ maxZoom, styles, calculator, points, onLoad }: MemoClusterProps) => {
    return (
      <MarkerClusterer
        maxZoom={maxZoom}
        styles={styles}
        calculator={calculator}
        key={uniqueID()}
        onLoad={onLoad}
      >
        {(clusterer) => {
          const result = points.map((point: LightPoint) => (
            <MarkerWrapper
              position={{
                lat: point.position[0],
                lng: point.position[1],
              }}
              options={{ optimized: true }}
              icon={point.icon}
              clusterer={clusterer}
              zIndex={point.zIndex}
              key={point.ID}
              point={point}
            />
          ));

          return result;
        }}
      </MarkerClusterer>
    );
  },
  (prevProps, nextProps) => {
    return comparePoints(prevProps.points, nextProps.points);
  }
);

export default MemoClusterer;
