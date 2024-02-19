import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"

const dbData = require('../../data/db.json')

// console.log(dbData[0])

function Home() {
    return (
        <>
            <Header />
            {
                dbData.map(data => {
                    return <Tours name={data.name} img={data.image} />
                })
            }
            <Footer />
        </>
    )
}

export default Home