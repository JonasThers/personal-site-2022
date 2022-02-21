import React, { useState, useMemo } from "react";
import "./styles/styles.scss";
import {
  Container,
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import { LoadingContext } from "./context/LoadingContext";
import { RetroThemeContext } from "./context/RetroThemeContext";
import Loading from "./components/Loading";
import Main from "./components/Main";

const retro = createMuiTheme({
  palette: {
    background: {
      default: "#000",
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    "fontFamily": `"Press Start 2P", cursive`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    allVariants: {
      textTransform: 'uppercase'
    }
   },
});

export const modern = createMuiTheme({
  palette: {
    text: {
      primary: '#fff',
    },
  },
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   },
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           background: 'linear-gradient(to right, #3949AB, #42A5F5)',
        },
      },
    },
  },
})

const App = () => {
  const [loading, setLoading] = useState(true);
  const [retroTheme, setRetroTheme] = useState(true);

  const loadingValue = useMemo(() => ({ loading, setLoading }));

  const retroThemeValue = useMemo(() => ({ retroTheme, setRetroTheme }));

  return (
    <RetroThemeContext.Provider value={retroThemeValue}>
      <MuiThemeProvider theme={retroTheme ? retro : modern}>
        <CssBaseline />
        <Container fixed>
          <LoadingContext.Provider value={loadingValue}>
            {loading && <Loading />}
            {!loading && <Main />}
          </LoadingContext.Provider>
        </Container>
      </MuiThemeProvider>
    </RetroThemeContext.Provider>
  );
};

export default App;
