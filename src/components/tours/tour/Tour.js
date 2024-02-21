import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Tour(props) {
    return (
        <div className="Tours-container">
            <h3>{props.name} </h3>

            <img src={props.img} alt={`Image of ${props.name}`} />
            {<br />}{<br />}
            <Link to={`/city/${props.id}`}>
                <Button variant="info">More Info</Button>
            </Link>
            

        </div>
    )
}
export default Tour