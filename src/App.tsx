import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/Employer">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
