import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ( { isLogin, setIsLogin } ) => {

  return (
    <>
      <nav>
        <h1><Link to='/'>Sangin's BLOG</Link></h1>
        <form action="">
          <button className='search'><i class="fa-solid fa-magnifying-glass"></i></button>
          <input type="text" />
        </form>
        <div>
          <button onClick={()=>{setIsLogin(!isLogin)}} className='login'>로그인</button>
          <button className='signup'>회원가입</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar