import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <section className='sidebar'>
        <div className='about'>
          <h2>About me</h2>
          <ul>
            <li><Link to ='/profile'>프로필</Link></li>
            <li><Link to ='/portfolio'>포트폴리오</Link></li>
          </ul>
        </div>

        <div>
          <h2>Category</h2>
          <ul className='category'>
            <li><h3><Link to='/post/all'>전체글</Link></h3></li>
            <li><Link to='/post/htmlcss'>HTML / CSS</Link></li>
            <li><Link to='/post/algorithm'>Algorithm</Link></li>
            <li><Link to='/post/structure'>자료구조</Link></li>
            <li><Link to='/post/javascript'>JavaScript</Link></li>
            <li><Link to='/post/react'>React</Link></li>
            <li><Link to='/post/nodejs'>NodeJS</Link></li>
            <li><Link to='/post/mongodb'>MongoDB</Link></li>
            <li><Link to='/post/express'>Express</Link></li>
            <li><Link to='/post/engineer'>정보처리기사</Link></li>
            <li><Link to='/post/engineer'>정보처리기사</Link></li>
            <li><Link to='/post/engineer'>정보처리기사</Link></li>
          </ul>
        </div>

          <div className='links'>
            <div>
              <a target='_blank' href="https://github.com/SanginJeong">
                <i class="fa-brands fa-github"></i>
                <h3>Github</h3>
              </a>
            </div>
            <div>
              <a target='_blank' href="https://blog.naver.com/enfp_isfj">
                <i class="fa-solid fa-blog"></i>
                <h3>BLOG</h3>
              </a>
            </div>
          </div>
      </section>
    </>
  )
}

export default Sidebar