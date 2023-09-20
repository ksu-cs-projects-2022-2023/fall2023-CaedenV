import Axios from "axios";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single"
import Store from "./pages/store/Store";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Library from "./pages/library/Library";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Read from "./pages/read/Read";
const clientId = "497979895028-b8cmvnagbbbl2oget6ir0dvjaokaufqc.apps.googleusercontent.com";


function App() {
  const [data,setData]=useState();
  const getData=async()=>{
    const response=await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);

    //getData()
  });


  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/register" element={clientId !== "" ? <Home /> : <Register />}>
        </Route>
        <Route path="/login" element={clientId !== "" ? <Home /> : <Login />}>
        </Route>
        <Route path="/store" element={clientId !== "" ? <Store /> : <Login />}>
        </Route>
        <Route path="/settings" element={clientId !== "" ? <Settings /> : <Login />}>
        </Route>
        <Route path="/book/:bookId" element={<Single />}>
        </Route>
        <Route path="/library" element={clientId !== "" ? <Library /> : <Login />}>
        </Route>
        <Route path="/read/:bookId" element={clientId !== "" ? <Read /> : <Login />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
