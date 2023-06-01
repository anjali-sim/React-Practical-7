import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "@src/Pages/SignUp/index";
import {Home} from "@src/Pages/Home/index";
import NotFound from "@src/Routes/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
