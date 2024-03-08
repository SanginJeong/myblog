import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLogin}) => {
  const navigate = useNavigate();
  const onClickSignin = () => {
    setIsLogin(false);
    navigate('/signin')
  }
  return (
    <>
      <div className='modal_login'>
        <div className='close_btn'>
          <button onClick={()=>{setIsLogin(false)}}><i class="fa-solid fa-xmark"></i></button>
        </div>
        <h3>블로그 로그인</h3>
        <input type="text" placeholder='아이디' />
        <input type="text" placeholder='비밀번호' />
        <button>로그인 완료</button>
        <button onClick={onClickSignin}>회원가입 하러가기</button>
      </div>
    </>
  )
}

export default Login