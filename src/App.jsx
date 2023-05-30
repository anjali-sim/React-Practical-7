import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Pages/SignUp/SignUp";
import Home from "./components/Pages/Home/Home";
import NotFound from "./Routes/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
