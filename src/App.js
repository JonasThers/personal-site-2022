import React, { useState, useMemo } from "react";
import "./styles/styles.scss";
import { Container } from "@material-ui/core";
import { LoadingContext } from "./context/LoadingContext";
import { RetroThemeContext } from "./context/RetroThemeContext";
import Loading from "./components/Loading";
import Main from "./components/Main";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [retroTheme, setRetroTheme] = useState(true);

  const loadingValue = useMemo(() => ({ loading, setLoading }));

  const retroThemeValue = useMemo(() => ({ retroTheme, setRetroTheme }));

  return (
    <RetroThemeContext.Provider value={retroThemeValue}>
      <Container fixed>
        <LoadingContext.Provider value={loadingValue}>
          {loading && <Loading />}
          {!loading && <Main />}
        </LoadingContext.Provider>
      </Container>
    </RetroThemeContext.Provider>
  );
};

export default App;
