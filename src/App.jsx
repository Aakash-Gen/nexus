import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Platform from "./Platform";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/platform" element={<Platform/>}/>
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
