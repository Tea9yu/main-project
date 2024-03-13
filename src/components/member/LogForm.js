import axios from "axios";
import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { stLogin } from "./StAtom";
import { useRecoilState } from "recoil";



export default function LogForm() {
  const [isLogin, setIsLogin] = useRecoilState(stLogin);
  const navigate = useNavigate();

  const loginId = useRef();
  const loginPw = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    const id = loginId.current.value;
    const password = loginPw.current.value;
    console.log(loginId);
    // 빈 값 검증
    if (id === "" || password === "") {
      alert("이메일, 비밀번호를 입력하세요.");
      return; // 빈 값이 있을 경우 댓글 작성 중단
    }
    try {
      const response = await axios.post(`http://10.125.121.184:8080/login`, {
        username: id,
        password: password,
      });
      console.log('응답', response);
      alert("로그인 성공");
      localStorage.setItem('token', response.data.accessToken); // 토큰을 localStorage에 저장
      // window.location.reload(); // 로그인 성공 시 페이지 새로고침
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    }

    // if (window.confirm()) {
    // try {
    //   const response = await axios.post(`http://10.125.121.184:8080/login`, {
    //     headers: {
    //       "Content-type": `application/json`
    //     },
    //     body: JSON.stringify({
    //       username: id,
    //       password: password,
    //     }),
    //   })
    //     // .then((res) => {
    //     //   // 서버로부터 응답 받음
    //     //   if (res.ok) {
    //     //     setIsLogin(true);
    //     //     localStorage.setItem("loginToken", res.headers.get("Authorization"));
    //     //     // 홈 페이지로 이동
    //     //     navigate("/");
    //     //   } else {
    //     //     alert("유효하지 않은 이메일 또는 비밀번호입니다.");
    //     //   }
    //     // })
    //     // .catch((err) => console.log(err));
    // } catch (error) { // try 블록에서 발생한 오류를 처리하기 위해 catch블록 추가
    //   console.log(error);
    // }
  };

  return (
    <div>
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">로그인</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">이메일</label>
                <div className="mt-2">
                  <input ref={loginId} id="email" name="email" type="email" placeholder='  아이디를 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
                  <div className="text-sm">
                    {/* <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
                  </div>
                </div>
                <div className="mt-2">
                  <input ref={loginPw} id="password" name="password" type="password" placeholder='  비밀번호를 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
              </div>
              <div>
                <button href="http://10.125.121.184:8080/oauth2/authorization/google" type="submit" className="flex w-full justify-center rounded-md bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500">구글Login</button>
              </div>
              <div>
                <button href="http://10.125.121.184:8080/oauth2/authorization/kakao" type="submit" className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">카카오Login</button>
              </div>
              <div>
                <button href="http://10.125.121.184:8080/oauth2/authorization/naver" type="submit" className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">네이버Login</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              {/* Not a member? */}
              <Link to='/join'><a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">회원가입</a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
