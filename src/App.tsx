import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import Intro from "./components/Intro/index.tsx";
import Main from "./components/Main/index.tsx";
import style from "./App.module.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className={style.app}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="main" element={<Main />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
