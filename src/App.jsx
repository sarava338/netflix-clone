import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/home";
import Login from './pages/login'
import NoPage from './pages/nopage'
import Movie from './pages/movie'

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/movie/:id' element={<Movie />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
