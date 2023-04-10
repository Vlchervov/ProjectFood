import "./App.css";
import { useState } from 'react';
import { FooterComponent } from "./components/footer";
import { HeaderComponent } from "./components/header";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/globalStyle";
import LightTheme from "./themes/LightTheme";
import DarkTheme from "./themes/DarkTheme";


const App = () => {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme(theme.title == "LightTheme" ? DarkTheme : LightTheme);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <HeaderComponent toggleTheme={toggleTheme} theme={theme} />
        <AppRouter />
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
