import Header from '../components/header'
import Row from '../components/row'

import requests from '../utils/requests'

const Home = () => {
  return (
    <>
      <Header fetchUrl={requests.fetchTrending} />
      <article className="rows">
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
  )
}

export default Home