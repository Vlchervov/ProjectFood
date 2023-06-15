import { AppRouter } from "./router/AppRouter";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/globalStyle";
import LightTheme from "./themes/LightTheme";
import DarkTheme from "./themes/DarkTheme";
import GlobalState from "./context/global/globalState";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { usePersistedStateForTheme } from "./utils/usePersistedStateForTheme";

const App = () => {
  const [theme, setTheme] = usePersistedStateForTheme<DefaultTheme>("theme", LightTheme);
  const toggleTheme = () => {
    setTheme(theme.title === "LightTheme" ? DarkTheme : LightTheme);
  };

  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <HeaderComponent toggleTheme={toggleTheme} theme={theme} />
          <AppRouter />
          <FooterComponent />
        </div>
      </ThemeProvider>
    </GlobalState>
  );
};

export default App;