import "./App.css";
import {ToastContainer } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404-page/PageNotFound";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
