import React from 'react'

const Profile = () => {
  return (
    <>
      <main>
        <div className="profile">
          <h1>프로필</h1>
          <h2>계획적으로, 논리적으로 프로그래밍을 하자.</h2>
          <div className='my_profile'>
            <div className='my_profile_image'>
              <img src="https://github.com/SanginJeong/myblog/blob/master/fe/src/image/KakaoTalk_20240308_172607051.jpg?raw=true" alt=""/>
              <h3>정상인</h3>
            </div>
            
            <div>
              <ul>
                <li>2000.04.07</li>
                <li>테스트 코드, 최적화에 항상 노력함</li>
                <li>남의 코드에 관심이 많음</li>
                <li>단점 : 디자인 능력 부족, 알고리즘 문제해결 부족</li>
                <li>노력 : 템플릿 화를 통한 디자인 능력 향샹, 많은 페이지 클론코딩 해보기, 꾸준한 알고리즘 문제 풀이</li>
              </ul>

              <ul>
                <h3>기술 스택</h3>
                <li>HTML / CSS</li>
                <li>tailwindCSS</li>
                <li>ReactJS</li>
                <li>React-router</li>
                <li>Redux</li>
                <li>TypeSciprt</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Git / Github</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile