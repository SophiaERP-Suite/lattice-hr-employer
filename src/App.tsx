import "./App.css";
import 'tippy.js/dist/tippy.css';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./utils/Auth/AuthProvider";
import { RequireLogin } from "./utils/Auth/RequireLogin";

function App() {
  return (
    <BrowserRouter basename="/one/lhr_emp">
      <AuthProvider>
        <RequireLogin>
          <AppRoutes />
        </RequireLogin>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
