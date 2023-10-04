import "./App.css";
import { useRoutes } from "react-router-dom";
import appRoutes from "./routers";

function App() {
  const elements = useRoutes(appRoutes);
  return <>{elements}</>;
}

export default App;
