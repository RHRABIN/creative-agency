import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from "react-router-dom";
import Heading from './shared/Heading';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Order from './components/dashboard/User/Order';
import ServiceLists from './components/dashboard/User/ServiceLists';
import UserReview from './components/dashboard/User/UserReview';
import RequireAuth from './shared/RequireAuth';

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

          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route path='order/:id' element={<Order />}></Route>
            <Route path='service' element={<ServiceLists />}></Route>
            <Route path='review' element={<UserReview />}></Route>
          </Route>

        </Routes>

      </Heading>

    </div>
  );
}

export default App;
