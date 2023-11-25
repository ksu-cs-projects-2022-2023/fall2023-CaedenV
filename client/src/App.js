import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single"
import Store from "./pages/store/Store";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Library from "./pages/library/Library";
import Read from "./pages/read/Read";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

//const clientId = "497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com";


function App() {
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <TopBar userId={userId} updateUserId={(newUserId) => setUserId(newUserId)}/>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={userId !== "null" ? <Home /> : <Login />} />
        <Route path="/:userId/store" element={userId !== "" ? <Store /> : <Login />} />
        <Route path="/:userId/settings" element={userId !== "" ? <Settings /> : <Login />} />
        <Route path="/:userId/view/:GoogleBookId" element={<Single />} />
        <Route path="/:userId/library" element={userId !== "" ? <Library /> : <Login />} />
        <Route path="/:userId/read/:bookId" element={userId !== "" ? <Read /> : <Login />} />
        <Route path="/:userId/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
