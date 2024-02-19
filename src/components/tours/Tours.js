import './Tours.css'

function Tours(props) {
    return (
        <div className="Tours-container">
            <h3>I am {props.name} </h3>

            <img src={props.img} alt={`Image of ${props.name}`} />

        </div>
    )
}

export default Tours