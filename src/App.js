import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Programs from './Components/Pages/Programs';
import About from './Components/Pages/About';
import RefoudAdventag from './Components/Pages/RefoudAdventag';
import Navigation from './Components/Shared/Navigation';
import Footer from './Components/Shared/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, [])

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "my_dark"} className="App">
      <Navigation handleThemeChange={handleThemeChange} theme={theme} />
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
