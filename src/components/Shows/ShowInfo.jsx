import { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useParams } from "react-router-dom";
import './ShowsInfo.css';

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
          
            <h1 className="p-3">{showsInfo?.name}</h1>

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


            {/*========== modal============ */}


      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title >Booking Information</Modal.Title>
        </Modal.Header>
          <Modal.Body className="d-flex ">
            <img width={130} src={showsInfo.image?.original} alt="show-img" />
             <Form className="px-3">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly  defaultValue={`${showsInfo.name}`} ></Form.Control>
        </Col>
      </Form.Group>
 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Price
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue='$100' />
        </Col>
              </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Time
        </Form.Label>
        <Col sm="10">
          <Form.Control readOnly defaultValue={`${showsInfo.schedule?.days}, ${showsInfo.schedule?.time}`} />
        </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Your Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder='Enter Your Name' />
        </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
         Phone Number
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder='Enter Your Number' />
        </Col>
      </Form.Group>
    </Form>
        
          </Modal.Body>
        <Modal.Footer>
          <button className="booking-button" onClick={handleClose}>
            Confirm
          </button>
          
        </Modal.Footer>
      </Modal>

        </div>
    );
};

export default ShowInfo;