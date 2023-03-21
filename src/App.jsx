import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./pages/Home";
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Movie from './pages/Movie'

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/movie/:movieId' element={<Movie />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
