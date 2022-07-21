import React, { useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import useTypedSelector from "../../hooks/useTypedSelector.ts";
import clusterCalculator from "./clusterCalculator.ts";
import MemoClusterer from "./MemoClusterer.tsx";
import stylesArray from "./mapStyle";
import { clusterStyle } from "./clusterStyle.ts";
import useActions from "../../hooks/useActions.ts";
import apiKey from "../../apiKey";
import style from "./style.module.scss";

const Map = () => {
  const mapRef = useRef<GoogleMap>(null);
  const { discretPoints } = useTypedSelector((state) => state.points);

  const { toggleLoading } = useActions();

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  // const [lang, setLang] = useState(settings.language);

  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey:
    //   process.env.GOOGLE_API_KEY !== undefined
    //     ? process.env.GOOGLE_API_KEY
    //     : '',

    googleMapsApiKey: apiKey,
    language: "en",
  });

  const removeLoader = () => {
    setTimeout(() => {
      toggleLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (discretPoints.length) {
      setCenter({
        lat: discretPoints[0].position[0],
        lng: discretPoints[0].position[1],
      });
    }
  }, [discretPoints]);

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      zoom={12}
      center={center}
      ref={mapRef}
      mapContainerClassName={style.map}
      onTilesLoaded={removeLoader}
      options={{
        styles: stylesArray,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_RIGHT,
        },
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP,
        },
      }}
    >
      <MemoClusterer
        maxZoom={16}
        styles={clusterStyle}
        calculator={clusterCalculator}
        points={discretPoints}
        onLoad={removeLoader}
      />
    </GoogleMap>
  );
};

export default Map;
