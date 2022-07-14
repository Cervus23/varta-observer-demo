import Intro from "./components/Intro/index.tsx";
import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.app}>
      <Intro />
    </div>
  );
};

export default App;
