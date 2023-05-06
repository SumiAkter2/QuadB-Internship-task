import { useEffect, useState } from "react";
import AllShows from "./AllShows";

const Shows = () => {
    const [shows, setShows] = useState([]);
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    useEffect(() => {
        fetch(url).then(res=>res.json()).then(data=>setShows(data))
    },[])
    return (
        <div>
            <h2>Our Popular Shows Here</h2>
            {shows.map(allShow=><AllShows key={allShow.show?.id} allShow={allShow}></AllShows>)}
        </div>
    );
};

export default Shows;