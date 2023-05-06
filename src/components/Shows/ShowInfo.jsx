import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ShowsInfo.css'
const ShowInfo = () => {
    const { id} = useParams();
    const [showsInfo, setShowsInfo] = useState({});

  useEffect(() => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
          setShowsInfo(data);
          console.log(showsInfo);
      });
  }, [id,showsInfo]);
    return (
        <div>
          
            <h1 className="p-3">  {showsInfo?.name}</h1>

            <div className="info-content d-flex justify-content-between align-items-start ">
                <img src={showsInfo.image?.original} alt="show-img" />
                <div className="p-3">
                 <p>{showsInfo.summary?.slice(18)} Paysinger. </p>
                 <h6>Language: {showsInfo.language} </h6>
                 <h6>Timezone: {showsInfo.network?.country?.timezone} </h6>
                 <p>Premiered: {showsInfo.premiered} </p>
                 {/* <p>Rating: {showsInfo.rating?.average} </p> */}
                 <p>Schedule-days: {showsInfo.schedule?.days} </p>
                 <p>Time: {showsInfo.schedule?.time} </p>
                 <p>Status: {showsInfo.status} </p>
                 <h6>Rating: {showsInfo.rating?.average} </h6>
                </div>
            </div>
        </div>
    );
};

export default ShowInfo;