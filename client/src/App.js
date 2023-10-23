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

const clientId = "497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com";


function App() {
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={{ userId, setUser }}>
      <Router>
        <TopBar onLogin={setUserId} />
        <Routes>
          <Route exact path="/" element={<Store />}>
          </Route>
          <Route path="/login" element={userId !== "" ? <Home /> : <Login />}>
          </Route>
          <Route path="/store" element={userId !== "" ? <Store /> : <Login />}>
          </Route>
          <Route path="/user/:userId/settings" element={userId !== "" ? <Settings /> : <Login />}>
          </Route>
          <Route path="/books/:GoogleBookId" element={<Single />}>
          </Route>
          <Route path="/user/:userId/library" element={userId !== "" ? <Library /> : <Login />}>
          </Route>
          <Route path="/read/:bookId" element={userId !== "" ? <Read /> : <Login />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
