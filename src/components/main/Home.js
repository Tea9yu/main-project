import TailSelect from '../../UI/TailSelect'
import nineOnce from '../../images/nineOnce.jpg'
import { Link } from "react-router-dom";

export default function Home() {
	const selSort = ["낮은가격순", "높은가격순"]

	return (
		<div className="bg-pink-50 flex flex-col justify-center items-center">
			<div className="max-w-4xl mx-auto px-4 py-8">
				{/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to<span className='inline-flex bg-orange-200 p-2 ml-2 text-orange-500 rounded-xl'>Mat.Zip</span> in Busan</h1> */}
				{/* <p className="text-lg text-center text-gray-600 mb-8">부산의 무한 매력 속에 담긴 다채로운 맛과 멋을 탐험하며, 그 곳마다 펼쳐지는 다양한 이야기를 만나보세요. 부산 맛집 여행은 오롯이 당신만의 특별한 추억으로 기억될 것입니다. 함께 부산의 밤을 더욱 풍성하고 매력적으로 만들어줄 최고의 맛집들을 발견하고, 그 곳에서 느껴지는 특별한 감동과 즐거움을 만끽하세요.</p> */}
				<div className='w-full'>
					<img src={nineOnce} alt="nineOnce" className=" rounded-lg shadow-lg mb-8" style={{ width: '1000px', height: '500px' }} />
				</div>
				<div className='flex justify-center gap-8'>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>전체</a></Link>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>아우터</a></Link>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>상의</a></Link>
					<Link><a className='border rounded-full p-4 bg-pink-200 '>하의</a></Link>					
				</div>
				<div id='카테고리 상품리스트'>
					<div id='상품리스트sort' className='flex justify-end'>
						<TailSelect opItem={selSort} />
					</div>
					<div id='상품리스트cont'>
					</div>
					<div id='페이지네이션'></div>
				</div>
			</div>
		</div>
	)
}
