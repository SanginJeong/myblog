import React from 'react'

const Login = () => {
  return (
    <>
      <div className='modal_login'>
        <div>
          <button><i class="fa-solid fa-xmark"></i></button>
        </div>
        <h3>로그인</h3>
        <input type="text" />
        <h3>비밀번호</h3>
        <input type="text" />
      </div>
    </>
  )
}

export default Login