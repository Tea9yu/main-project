import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginStAtom } from "../components/member/LoginStAtom";


export default function Nav() {

	const [user, setUser] = useState(false);
	// // const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStAtom);
	// if (localStorage.getItem("token") !== null) {
	// 	setUser(true);
	// }
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStAtom);

	useEffect(() => {
		// 컴포넌트가 마운트될 때만 실행되도록 이펙트를 설정합니다.
		if (localStorage.getItem("token") !== null) {
			setUser(true);
			// window.location.reload();
			
		}
	}, []); // 빈 배열을 두 번째 매개변수로 전달하여 컴포넌트가 마운트될 때만 실행되도록 합니다.



	
	return (
		<div className="bg-[#161616] flex justify-center items-center gap-4 fixed top-0 w-full z-10 min-w-[1050px]">
			<nav className="border-gray-200 py-2.5 dark:bg-gray-900">
				<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
					<div className="flex items-center">
						<a href="#" className="mr-10 self-center text-xl font-semibold whitespace-nowrap text-white ">
							{/* <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" /> */}
							<Link to='/'>nine</Link>
						</a>
						<div className="items-center justify-between w-full" id="mobile-menu-2">
							<ul className="flex flex-row font-medium space-x-4">
								<li>
									<Link to='/'
										className="block py-2 pl-3 pr-4 text-white hover:bg-pink-500 rounded dark:text-white"
										aria-current="page">ABOUT US</Link>
								</li>
								<li>
									<Link to='/upload' className="block py-2 pl-3 pr-4 text-white  border-gray-100 hover:bg-pink-500 rounded  dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">SERVICE</Link>
								</li>
								<li>
									<Link to='/clothes'
										className="block py-2 pl-3 pr-4 text-white  border-gray-100 hover:bg-pink-500 rounded dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">의류</Link>
								</li>
								<li>
									{ user ? <Link to='/mypage' className="block py-2 pl-3 pr-4 text-white  border-gray-100 hover:bg-pink-500 rounded dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">myPage</Link>
									: <Link to='/login'className="block py-2 pl-3 pr-4 text-white  border-gray-100 hover:bg-pink-500 rounded dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">로그인</Link> }
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>

	)
}

// import { Link } from "react-router-dom";


// export default function Nav() {
// 	return (
// 		<div className="bg-black flex justify-center items-center gap-4 fixed top-0 w-full z-10 min-w-[1050px]">
// 			<nav className=" border-gray-200 py-2.5 dark:bg-gray-900 ">
// 				<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
// 					<a href="#" className="flex items-center">
// 						{/* <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" /> */}
// 						<Link to='/'>	<span className="mr-10 self-center text-xl font-semibold whitespace-nowrap text-white">nine</span></Link>
// 					</a>
// 					<div className="flex items-center lg:order-2">
// 						<div className="hidden mt-2 mr-4 sm:inline-block">
// 							<span></span>
// 						</div>
// 						{/* <a href="https://themesberg.com/product/tailwind-css/landing-page"
//                 className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">Download</a> */}
// 						<button data-collapse-toggle="mobile-menu-2" type="button"
// 							className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// 							aria-controls="mobile-menu-2" aria-expanded="true">
// 							<span className="sr-only">Open main menu</span>
// 							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// 								<path fill-rule="evenodd"
// 									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
// 									clip-rule="evenodd"></path>
// 							</svg>
// 							<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// 								<path fill-rule="evenodd"
// 									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
// 									clip-rule="evenodd"></path>
// 							</svg>
// 						</button>
// 					</div>
// 					<div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
// 						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
// 							<li>
// 								<Link to='/'
// 									className="block py-2 pl-3 pr-4 text-white bg-pink-500 rounded lg:bg-transparent lg:text-pink-500 lg:p-0 dark:text-white"
// 									aria-current="page">ABOUT US</Link>
// 							</li>
// 							<li>
// 								<Link to='/upload'
// 									className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">SEVICE</Link>
// 							</li>
// 							<li>
// 								<Link to='/clothes'
// 									className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">의류</Link>
// 							</li>
// 							<li>
// 								<Link to='/login'
// 									className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">로그인</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	)
// }
// {/* <div className='flex justify-start'>
// 				<div>
// 					<div>
// 						<img />
// 						<Link to='/'><span>nine</span></Link>
// 					</div>
// 				</div>
// 				<div className='flex  gap-10'>
// 					<div className=''>
// 						<Link to='/'><span>ABOUT US</span></Link>
// 					</div>
// 					<div>
// 						<Link to='/upload'><span>SEVICE</span></Link>
// 					</div>
// 					<div>
// 						<span>의류</span>
// 					</div>
// 				</div>
// 				<div>
// 					<div>
// 						<Link to='/login'><a>로그인</a></Link>
// 					</div>
// 				</div>
// 			</div>	 */}