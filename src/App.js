import "./App.css";
import { CategoriesComponent } from "./components/categories";
import { FooterComponent } from "./components/footer";
import { HeaderComponent } from "./components/header";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AppRouter />
    </div>
  );
}

export default App;
