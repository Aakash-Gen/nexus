import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Platform from "./Platform";
import SignUp from "./components/SignUp";
import Password_reset from "./components/Password_reset";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/platform" element={<Platform/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/password_reset" element={<Password_reset/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
