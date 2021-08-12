import React from 'react'
import './App.css';
import Row from './Components/MovieRow';
import requests from './requests';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
//23588a5ffea12900e26311eb7decfb72
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title = "Netflix Original" fetchURL ={requests.fetchNetflixOriginals} isLarge = {true} />
      <Row title = "Continue Watching" fetchURL ={requests.fetchTopRated} isLarge = {true} isWatching = {true}/>
      <Row title = "Horror Movies" fetchURL ={requests.fetchHorrorMovies} />
      <Row title = "Trending" fetchURL ={requests.fetchTrending} />
      <Row title = "Documentaries" fetchURL ={requests.fetchDocumentaries} />
      <Row title = "Comedy Movies" fetchURL ={requests.fetchComedyMovies} />
      <Row title = "Action Movies" fetchURL ={requests.fetchActionMovies} />
      <Row title = "Romance Movies" fetchURL ={requests.fetchRomanceMovies} />
      <Row title = "Top Rated" fetchURL ={requests.fetchTopRated} />
      
    </div>
  );
}

export default App;
