import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Main from './component/mainboard/Main';
import Profile from './component/mainboard/Profile';
import Portfolio from './component/mainboard/Portfolio';
import All from './component/mainboard/All';
import HtmlCss from './component/mainboard/HtmlCss';
import Algorithm from './component/mainboard/Algorithm';
import Structure from './component/mainboard/Structure';
import Javascript from './component/mainboard/Javascript';
import Reactjs from './component/mainboard/Reactjs';
import Nodejs from './component/mainboard/Nodejs';
import Mongodb from './component/mainboard/Mongodb';
import Express from './component/mainboard/Express';
import Enginner from './component/mainboard/Enginner';
import Login from './component/mainboard/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Navbar isLogin = {isLogin} setIsLogin = {setIsLogin}/>
      {isLogin ? <Login /> : null}
      <Routes>
        <Route path='/' element= {<Main />}/>
        <Route path='/profile' element= {<Profile />}/>
        <Route path='/portfolio' element= {<Portfolio />}/>
        <Route path='/post/all' element= {<All />}/>
        <Route path='/post/htmlcss' element= {<HtmlCss />}/>
        <Route path='/post/algorithm' element= {<Algorithm />}/>
        <Route path='/post/structure' element= {<Structure />}/>
        <Route path='/post/javascript' element= {<Javascript />}/>
        <Route path='/post/react' element= {<Reactjs />}/>
        <Route path='/post/nodejs' element= {<Nodejs />}/>
        <Route path='/post/mongodb' element= {<Mongodb />}/>
        <Route path='/post/express' element= {<Express />}/>
        <Route path='/post/engineer' element= {<Enginner />}/>
      </Routes>
      <Sidebar />
    </>
  );
}

export default App;
