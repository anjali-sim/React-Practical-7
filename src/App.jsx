import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "@src/Pages/SignUp/index";
import {Home} from "@src/Pages/Home/index"; // Update the import statement for Home
import { NotFound } from "@src/Pages/NotFound/index";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
