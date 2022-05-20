import './App.css';
import { useEffect , useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import {motion , AnimatePresence} from 'framer-motion';

function App() {

  const [popular, setpopular] = useState([]);
  const [filtred, setfiltred] = useState([]);
  const [activegenere, setactivegenere] = useState(0);

 useEffect(() => {
      fetchPopular();
 }, [])
 

  const fetchPopular = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9842e0fe166de7cadaf31e4280bf0741&language=en-US&page=1');
     const movies = await data.json();
      setpopular(movies.results);
      setfiltred(movies.results);
      console.log(movies)
      

  
  }
  return (
    <div className="App">
      <Filter 
      popular={popular}
      setfiltred={setfiltred}
      activegenere={activegenere}
      setactivegenere={setactivegenere}
       />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
        {
          filtred.map(movie => {

            return <Movie key={movie.id} movie={movie} />
})}
</AnimatePresence>
      </motion.div >

    </div>
  );
}

export default App;
