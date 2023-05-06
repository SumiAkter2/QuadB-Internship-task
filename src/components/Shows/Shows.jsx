import { useEffect, useState } from "react";
import AllShows from "./AllShows";
import './shows.css';
const Shows = () => {
    const [shows, setShows] = useState([]);
    const url = 'https://api.tvmaze.com/search/shows?q=all';
    useEffect(() => {
        fetch(url).then(res=>res.json()).then(data=>setShows(data))
    }, [])
    console.log(shows);
    return (
        <div>
            <h2 className="ms-2 py-4">Our Popular Shows Here</h2>
            <div>
                <div className="shows-container" >
                    {shows.map(allShow=><AllShows key={allShow.show?.id} allShow={allShow}></AllShows>)}
                  </div>
          </div>
        </div>
    );
};

export default Shows;