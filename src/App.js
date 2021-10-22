import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <Weather defaultCity="Portland" />
        <Footer />
      </div>
    </div>
  );
}
