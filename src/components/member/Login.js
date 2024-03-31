import axios from "axios";
import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginStAtom } from "./LoginStAtom";

export default function LogForm() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStAtom);
  const navigate = useNavigate();

  const loginId = useRef();
  const loginPw = useRef();

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지

    const id = loginId.current.value;
    const password = loginPw.current.value;

    // 빈 값 검증
    if (id === "" || password === "") {
      alert("아이디, 비밀번호를 입력하세요.");
      return;
    }

    try {
      // 서버에 로그인 요청 보내기
      const response = await axios.post(`http://10.125.121.184:8080/login`, {
        customerNum: id,
        agree: "true",
        password: password,
      });
      
      // 로그인 성공 시 처리
      alert("로그인 성공");
      setIsLoggedIn(true);
      localStorage.setItem('token', response.headers.authorization); // 토큰을 localStorage에 저장
      localStorage.setItem('username', id);
      navigate("/");
      window.location.reload(); // 로그인 성공 시 페이지 새로고침
    } catch (error) {
      // 로그인 실패 시 처리
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    }
  };

  // 엔터 키 눌렀을 때 폼 제출
  const enterKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <div>
      <div>
        <div className=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">로그인</h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="bg-white space-y-6 border p-6 rounded-lg" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">사용자</label>
                <div className="mt-2">
                  <input ref={loginId} onKeyDown={enterKeyDown} id="email" name="email" type="text" placeholder='  아이디를 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
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
                  <input ref={loginPw} onKeyDown={enterKeyDown} id="password" name="password" type="password" placeholder='  비밀번호를 입력하세요' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="mt-2 py-3 flex justify-center items-center">
                <button type="submit" className="flex w-full justify-center items-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-violet-500">Login</button>
              </div>
              <p className="mt-5 text-center text-sm text-gray-500">
              <Link to='/join'><a className="font-semibold leading-6 text-black hover:text-violet-500">회원가입</a></Link>
            </p>
            </form>            
          </div>
        </div>
      </div>
    </div>
  )
}
