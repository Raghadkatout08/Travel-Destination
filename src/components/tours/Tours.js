import './Tours.css';
import Tour from './tour/Tour';
import dbData from '../../data/db.json'

// const dbData = require('../../data/db.json')

function Tours() {
    return (
        <div>
            {dbData.map((data) => (
                    <Tour name={data.name} img={data.image} id={data.id} key={data.id} />
            ))}
        </div>
    )
}

export default Tours;

{/* // <div className="Tours-container">
    //     <h3>I am {props.name} </h3>

    //     <img src={props.img} alt={`Image of ${props.name}`} />

    // </div> */}

{/* {dbData.map((tour) => (
                <Link key={Tour.id} to={'/city/${tour.id}'} > 
                    <Tour tour={tour}
                    isSelected= {selectTour === tour.id} 
                    onSelect={handleTourSelect}
                    />
                </Link>

            ))} */}