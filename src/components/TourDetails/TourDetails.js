import { useState } from "react";
import { useParams } from "react-router-dom";
import dbData from '../../data/db.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TourDetails.css';


function TourDetails() {
    let { id } = useParams();

    let selectTour = dbData.find(tour => tour.id === id);

    const { name, info, image, price } = selectTour;

    const [fullDesc, setFullDesc] = useState(false)

    const readDesc = () => {
        setFullDesc(!fullDesc)

    }

    return (
        <div className="tour-details-container">
                <Card className="Card">
                    <Card.Img className="img" variant="top" src={image} alt={`Image of ${name}`} />
                    <Card.Body className="Body">
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {fullDesc ? info : `${info.substring(0, 120)}...`}
                            {<br />}{<br />}
                            <Button onClick={readDesc}> {fullDesc ? "See Less" : "See More"} </Button>
                        </Card.Text>
                        <Card.Title>Price : {price} </Card.Title>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default TourDetails;


{/* <h2>{name}</h2>
            <img src={image} alt={`Image of ${name}`} />

            <p>{fullDesc ? info : `${info.substring(0, 350)}...`} </p>

            <button onClick={readDesc}> {fullDesc ? "See Less" : "See More"} </button>

            <p>Price: {price}</p> */}