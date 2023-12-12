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
  const backend = "http://localhost:8000";

  return (
    <Router>
      <TopBar userId={userId} updateUserId={setUserId}/>
      <Routes>
        <Route exact path="/" element={userId !== null ? <Home backend={backend} userId={userId}/> : <Login />} />
        <Route path="/login" element={userId !== null ? <Home backend={backend} userId={userId}/> : <Login />} />
        <Route path="/:userId/store" element={userId !== null ? <Store backend={backend} userId={userId}/> : <Login />} />
        <Route path="/:userId/settings" element={userId !== null ? <Settings backend={backend} userId={userId}/> : <Login />} />
        <Route path="/view/:GoogleBookId" element={<Single userId={userId}/>} />
        <Route path="/:userId/library" element={userId !== null ? <Library backend={backend} userId={userId}/> : <Login />} />
        <Route path="/read/:bookId" element={userId !== null ? <Read /> : <Login />} />
        <Route path="/:userId/home" element={<Home backend={backend} userId={userId}/>} />
      </Routes>
    </Router>
  );
}

export default App;
