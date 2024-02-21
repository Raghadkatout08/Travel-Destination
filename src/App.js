import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/city/:id' element={<TourDetails />} /> 
        </Routes>
      </header>
    </div>
  );
}

export default App;