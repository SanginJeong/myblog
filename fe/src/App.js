import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Main from './component/categories/Main';
import Profile from './component/categories/Profile';
import Portfolio from './component/categories/Portfolio';
import All from './component/categories/All';
import HtmlCss from './component/categories/HtmlCss';
import Algorithm from './component/categories/Algorithm';
import Structure from './component/categories/Structure';
import Javascript from './component/categories/Javascript';
import Reactjs from './component/categories/Reactjs';
import Nodejs from './component/categories/Nodejs';
import Mongodb from './component/categories/Mongodb';
import Express from './component/categories/Express';
import Enginner from './component/categories/Enginner';
import Login from './component/Login';
import Overlay from './component/Overlay';
import Signin from './component/Signin';
import Tailwind from './component/categories/Tailwind';
import Board from './component/board/Board';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Navbar setIsLogin = {setIsLogin}/>
      {isLogin ? <Login setIsLogin = {setIsLogin}/> : null}
      {isLogin ? <Overlay/> : null}
      <Routes>
        <Route path='/' element= {<Main />}/>
        <Route path='/profile' element= {<Profile />}/>
        <Route path='/portfolio' element= {<Portfolio />}/>
        <Route path='/post/all' element= {<All />}/>
        <Route path='/post/htmlcss' element= {<HtmlCss />}/>
        <Route path='/post/tailwindcss' element= {<Tailwind />}/>
        <Route path='/post/algorithm' element= {<Algorithm />}/>
        <Route path='/post/structure' element= {<Structure />}/>
        <Route path='/post/javascript' element= {<Javascript />}/>
        <Route path='/post/react' element= {<Reactjs />}/>
        <Route path='/post/nodejs' element= {<Nodejs />}/>
        <Route path='/post/mongodb' element= {<Mongodb />}/>
        <Route path='/post/express' element= {<Express />}/>
        <Route path='/post/engineer' element= {<Enginner />}/>
        <Route path='/signin' element= {<Signin />}/>
      </Routes>
      <Sidebar />
    </>
  );
}

export default App;
