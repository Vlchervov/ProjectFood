import "./App.css";
import { CatalogComponent } from "./components/Catalog/CatalogComponent";
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
