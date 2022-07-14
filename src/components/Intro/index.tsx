import React from "react";
import style from "./style.module.scss";

const Intro = () => {
  return (
    <div className={style.introContainer}>
      <div className={style.header}>
        <div className={style.titleBox}>
          <h1>Varta Observer Web demo</h1>
          <img className={style.logo} src="./*" alt="logo" />
        </div>
        <p className={`${style.text} ${style.introText}`}>
          This is a demo of the desktop app VartaObserver which is powered by
          Electron, React, and Redux.
        </p>
        <div className={style.techLogoBox}>
          <img
            className={`${style.techLogo} ${style.electron}`}
            src="./*"
            alt="Electron logo"
          />
          <img
            className={`${style.techLogo} ${style.react}`}
            src="./*"
            alt="React logo"
          />
          <img
            className={`${style.techLogo} ${style.redux}`}
            src="./*"
            alt="Redux logo"
          />
        </div>
      </div>
      <div className={`${style.contentBox} ${style.firstBox}`}>
        <p className={`${style.text} ${style.contentText}`}>
          In this demo, you can view the display of device readings on the map.
        </p>
        <img className={style.contentImage} src="./*" alt="displaying" />
      </div>
      <div className={`${style.contentBox} ${style.secondBox}`}>
        <img className={style.contentImage} src="./*" alt="How to use" />
        <div className={style.container}>
          <p className={`${style.text} ${style.contentText}`}>
            To see how it works, choose an available device in "DEVICES" tab and
            click "APPLY FILTERS".
          </p>
          <p className={`${style.text} ${style.contentText}`}>
            You can also adjust other parameters on the side panel and see how
            they affect the appearance.
          </p>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
