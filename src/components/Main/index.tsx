import React from "react";
import LoadWindow from "../LoadWindow/index.tsx";
import InfoBlock from "../InfoBlock/index.tsx";
import MainWindow from "../MainWindow/index.tsx";
import Sidebar from "../Sidebar/index.tsx";
import style from "./style.module.scss";

const Main = () => {
  return (
    <div className={style.displayer}>
      <LoadWindow />
      <Sidebar />
      <MainWindow />
      <InfoBlock />
    </div>
  );
};

export default Main;
