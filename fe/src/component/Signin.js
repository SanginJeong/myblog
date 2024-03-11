import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import api from '../utils/api';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onClickCompleteSignin = async (e) =>{
    e.preventDefault();
    try {
      if(password !== checkPassword){
        throw new Error('비밀번호를 다시 확인하세요.');
      }
      if(!email){
        throw new Error('이메일을 입력하세요');
      }
      if(!password){
        throw new Error('비밀번호를 입력하세요');
      }
      if(!checkPassword){
        throw new Error('비밀번호 확인을 입력하세요');
      }
      if(!name){
        throw new Error('닉네임을 입력하세요');
      }
      const response = await api.post('/user',{name,email,password});
      console.log(response);
      navigate('/');
    } catch (error) {
      setError(error.message || error.error);
    }
  }

  return (
    <>
      <main>
        <div className='signinpage'>
          <h1>회원가입</h1>
          <h3>비밀번호는 암호화해서 저장되기 때문에 걱정 안해도 됨 아무도 모름</h3>
          <h3 style={ {color: 'red'} }> {error ? error: null} </h3>
          <form className='signin_area' onSubmit={onClickCompleteSignin}>
            <input type="text" placeholder='이메일' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="text" placeholder='비밀번호' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="text" placeholder='비밀번호 확인' value={checkPassword} onChange={(e)=>{setCheckPassword(e.target.value)}}/>
            <input type="text" placeholder='닉네임' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={onClickCompleteSignin}>회원가입 완료</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Signin