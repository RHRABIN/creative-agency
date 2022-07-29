import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from "react-router-dom";
import Heading from './shared/Heading';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Heading>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
        </Routes>

      </Heading>

    </div>
  );
}

export default App;
