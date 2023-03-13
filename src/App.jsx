import Nav from "./components/nav";
import Header from "./components/header";
import Row from "./components/row";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Header fetchUrl={requests.fetchTrending} />
      <article>
        <Row
          title="NETFLIX ORIGIALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
      </article>
    </>
  );
}

export default App;
