import "./App.css";
import Header from "./pages/Header";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExternalPage from "./pages/ExternalPage";
function App() {
  return (
    <div>
      <Router>
        <Route path="/l" component={Layout} />
        <Route path="/external" component={ExternalPage} />
      </Router>
    </div>
  );
}

export default App;