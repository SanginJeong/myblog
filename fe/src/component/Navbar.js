import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = ( { setIsLogin } ) => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <h1><Link to='/'>Sangin's BLOG</Link></h1>
        <form action="">
          <button className='search'><i class="fa-solid fa-magnifying-glass"></i></button>
          <input type="text" />
        </form>
        <div>
          <button onClick={()=>{setIsLogin(true)}} className='login'>로그인</button>
          <button onClick={()=>{navigate('/signin')}}className='signup'>회원가입</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar