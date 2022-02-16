import React, { useState, useMemo } from "react";
import "./styles/styles.scss";
import { Container } from "@material-ui/core";
import { LoadingContext } from "./context/LoadingContext";
import Loading from "./components/Loading";
import Main from "./components/Main";

const App = () => {
  const [loading, setLoading] = useState(true);

  const loadingValue = useMemo(() => ({ loading, setLoading }));

  return (
    <Container maxWidth="sm">
      <LoadingContext.Provider value={loadingValue}>
        {loading && <Loading />}
        {!loading && <Main />}
      </LoadingContext.Provider>
    </Container>
  );
};

export default App;
