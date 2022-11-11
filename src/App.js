import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Programs from './Components/Pages/Programs';
import About from './Components/Pages/About';
import RefoudAdventag from './Components/Pages/RefoudAdventag';
import Navigation from './Components/Shared/Navigation';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/programs' element={<Programs />}></Route>
        <Route path='/refoud' element={<RefoudAdventag />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
