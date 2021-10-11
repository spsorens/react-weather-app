import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Search />
        <Footer />
      </div>
    </div>
  );
}
