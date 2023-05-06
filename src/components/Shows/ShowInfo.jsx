import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useParams } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import './ShowsInfo.css'
const ShowInfo = () => {
    const { id} = useParams();
    const [showsInfo, setShowsInfo] = useState({});
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <div className="px-3">
                 <p>{showsInfo.name} {showsInfo.summary?.slice(18,180)} Paysinger. </p>
                 <h6>Language: {showsInfo.language} </h6>
                 <h6>Timezone: {showsInfo.network?.country?.timezone} </h6>
                 <p>Premiered: {showsInfo.premiered} </p> 
                 <p>Schedule-days: {showsInfo.schedule?.days} </p>
                 <p>Time: {showsInfo.schedule?.time} </p>
                 <p>Status: {showsInfo.status} </p>
                    <h6>Rating: {showsInfo.rating?.average ? showsInfo.rating?.average:'Not available' } </h6>
                    <button className="booking-button" onClick={handleShow}>Booking Ticket</button>
                </div>
            </div>


            {/* modal */}


      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title >{showsInfo.name}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <img width={130} src={showsInfo.image?.original} alt="show-img" />
            
           <h6>Address: {showsInfo.network?.country?.name} </h6>
           <h6>Schedule-days: {showsInfo.schedule?.days} </h6>
                 <h6>Time: {showsInfo.schedule?.time} </h6>
          </Modal.Body>
        <Modal.Footer>
          <button className="booking-button" onClick={handleClose}>
            Close
          </button>
          
        </Modal.Footer>
      </Modal>

        </div>
    );
};

export default ShowInfo;