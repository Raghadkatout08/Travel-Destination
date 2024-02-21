import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"
// import TourDetails from "../TourDetails/TourDetails";
// import { Routes , Route } from "react-router-dom";



// console.log(dbData[0])

function Home() {
    return (
        <>
            <h1> Welcome to Home Page</h1>
            {/* {
                dbData.map(data => {
                    return <Tours name={data.name} img={data.image} />
                })
            } */}
            <Tours/>
            <Footer />
        </>
    )
}

export default Home