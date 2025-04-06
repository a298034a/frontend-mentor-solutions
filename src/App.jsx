import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import QrCodeComponent from "./pages/qr-code-component/QrCodeComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<QrCodeComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
