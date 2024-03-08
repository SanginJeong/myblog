import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
  const navigate = useNavigate();
  const onClickCompleteSignin = () =>{
    navigate('/');
  }
  return (
    <>
      <main>
        <div className='signinpage'>
          <h1>회원가입</h1>
          <h3>비밀번호는 암호화해서 저장되기 때문에 걱정 안해도 됨 아무도 모름</h3>
          <div className='signin_area'>
            <input type="text" placeholder='이메일' />
            <input type="text" placeholder='비밀번호' />
            <input type="text" placeholder='비밀번호 확인' />
            <input type="text" placeholder='닉네임' />
            <button onClick={onClickCompleteSignin}>회원가입 완료</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Signin