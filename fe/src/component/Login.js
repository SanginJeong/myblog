import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../utils/api';

// 로그인 실패시 에러메시지 띄우기
// 로그인 성공시 모달창 지우기
// 로그아웃 창으로바뀌기
const Login = ({setIsModal, setIsUserLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onClickSignin = () => {
    setIsModal(false);
    navigate('/signin')
  }

  const onClickLogin = async (e) => {
    e.preventDefault();
    try {
      if(!email){
        throw new Error('이메일을 입력하세요.')
      }
      if(!password){
        throw new Error('비밀번호를 입력하세요.')
      }

      const response = await api.post('/user/login',{email,password});
      console.log('response:',response);
      setIsModal(false);
      setIsUserLogin(true);
    } catch (error) {
      setError(error.message || error.error);
    }
  }
  return (
    <>
      <div className='modal_login'>
        <div className='close_btn'>
          <button onClick={()=>{setIsModal(false)}}><i class="fa-solid fa-xmark"></i></button>
        </div>

        <h3>블로그 로그인</h3>
        <div style={{color :'red', textAlign : 'center'}}>{error ? error : null}</div>
        <form>
          <input type="text" placeholder='이메일' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="text" placeholder='비밀번호' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={onClickLogin}>로그인 완료</button>
        </form>
        <button onClick={onClickSignin}>회원가입 하러가기</button>
      </div>
    </>
  )
}

export default Login