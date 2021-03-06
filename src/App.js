import React, {useState, useEffect} from "react";
import axios from "axios";
import {CardList} from "./components/CardList";
import {SearchBox} from "./components/SearchBox";
import './App.css';

const apiKey = "e584074d53167c0eaafd814433447c25"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImgUrl = "https://image.tmdb.org/t/p/w500";

function App() {
  const [movieList, setMovieList] = useState([]); 
  const [searchKeyword, setSearchKeyword] = useState("Matrix")

  useEffect(()=>{
      axios.get(
          baseUrl, {params:{
              api_key: apiKey,
              page: 1,
              query: searchKeyword
          }}
      )
      .then((res)=> setMovieList(res.data.results))
      .catch()
      .finally()
  }, [searchKeyword])


  return (
    <div className="App">
      <SearchBox setSearchKeyword = {setSearchKeyword} />
      <CardList movieList={movieList} baseImgUrl={baseImgUrl}/>
    </div>
  );
}

export default App;

