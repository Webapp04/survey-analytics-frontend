import "./App.css";
import { useRoutes } from "react-router-dom";
import appRoutes from "./routers";
import Navbar from "./components/Navbar";

function App() {
  const elements = useRoutes(appRoutes);
  return (
    <div className="main-body">
      <Navbar />
      <div className="page-container">{elements}</div>
    </div>
  );
}

export default App;
