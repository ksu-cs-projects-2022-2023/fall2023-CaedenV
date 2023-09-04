import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single"
import Store from "./pages/store/Store";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Library from "./pages/library/Library";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import Read from "./pages/read/Read";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/register" element={user ? <Home/> :<Register />}>
        </Route>
        <Route path="/login" element={user ? <Home/> :<Login />}>
        </Route>
        <Route path="/store" element={user ? <Store/> :<Login />}>
        </Route>
        <Route path="/settings" element={user ? <Settings/> :<Login />}>
        </Route>
        <Route path="/book/:bookId" element={<Single />}>
        </Route>
        <Route path="/library" element={user ? <Library /> :<Login/>}>
        </Route>
        <Route path="/read/:bookId" element={user ? <Read /> :<Login/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
