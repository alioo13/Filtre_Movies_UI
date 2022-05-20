import { useEffect , useState } from 'react';
import {motion} from 'framer-motion';

const Filter = ( { popular,setfiltred,activegenere,setactivegenere,}) => {

    useEffect(() => {
     if(activegenere === 0){
       setfiltred(popular);
       return;
     } 
     const filtreed = popular.filter(movie => movie.genre_ids.includes(activegenere));
     setfiltred(filtreed);
    }, [activegenere]);
    
  return (
    <div className="filter-movies">
        <button className={activegenere === 0 ? "active" : ""} onClick={() => setactivegenere(0)}>All</button>
        <button  className={activegenere === 35 ? "active" : ""} onClick={() => setactivegenere(35)}> Comedy</button>
        <button className={activegenere === 28 ? "active" : ""} onClick={() => setactivegenere(28)}>Action</button>
        <button className={activegenere === 12 ? "active" : ""} onClick={() => setactivegenere(12)}>drama</button>


    </div>
  )
}

export default Filter