import "./App.css";
import { Cart } from "./components/cart";
import { FooterComponent } from "./components/footer";
import { HeaderComponent } from "./components/header";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AppRouter />
      <FooterComponent />
    </div>
  );
}

export default App;
