import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination';
import './paginate.css';
import ClothesFilter from './ClothesFilter';
import { useNavigate } from 'react-router-dom';

export default function ClothesInfo() {
  // const categories = ['ALL', 'OUTER', 'TOP', 'BOTTOM'];  // 상품 카테고리
  // const products = ['Product1', 'Product 2', 'Product 3'];  // 상품 목록

  // const categoryMap = {'아우터' : ['JP', 'JK', 'CT', 'VT', 'CA'], '상의': ['TS', 'TN', 'KT', 'KN', 'BL', 'WS', 'BN'], '하의': ['PT', 'DP', 'SK', 'LG'] };  // 카테고리 매핑
  // const categories = ['ALL', ...Object.keys(categoryMap)];  // 상품 카테고리
  const [selectedCategory, setSelectedCategory] = useState('ALL');  // 추가된 상태 변수
  const navigate = useNavigate();
  const [clothesList, setClothesList] = useState([]);
  const [itemsCountPerPage, setItemsCountPerPage] = useState([]);
  // const [clothesTag, setClothesTag] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState();

  const [booleanState, setBooleanState] = useState(false);

  const handleBoolean = (e) => {
    setBooleanState(true);
    console.log(booleanState);
  };
    
    const getClothesList = async (pgno) => {
      const resp = await fetch(`http://10.125.121.184:8080/product/items/${pgno}`, {
        method: 'GET',
      });
      let data = await resp.json();
      if (data.content === null) {return}
      console.log('data=',data)
      setClothesList(data.content);  // 상품 목록 업데이트
      setItemsCountPerPage(data.pageable.pageSize); // 페이지 상품 개수
      setTotalNum(data.totalElements);  // 전체 상품 수 업데이트
    }

  useEffect(() => {  
    if (selectedCategory === "ALL") {getClothesList(page)}
    // console.log("selectedCategory",selectedCategory)
    else {
      fetchSubCategories(page);
    }
    
   // 페이지 번호 변경 시 새로운 상품 목록 불러옴
  }, [page, selectedCategory]);
 

  // 페이지 변경
  const handlePageChange = (page) => {
    console.log("page=", page)
    setPage(page);
    getClothesList(page);

    // 페이지가 변경되면 화면을 최상단으로 스크롤
    window.scrollTo(0, 0);
  }
  
    // 중분류 카테고리 클릭 시 처리할 함수
    // const handleSubCategoryClick = (mainCategory, subCategoryCode) => {
    //   // 선택한 대분류와 중분류 카테고리 코드를 이용하여 필요한 로직을 수행합니다.
    //   console.log(`Selected category: ${mainCategory} - ${subCategoryCode}`);
    //   // 예시: 선택한 카테고리 정보를 상태로 업데이트하거나 다른 작업을 수행할 수 있습니다.
    // };
    const fetchSubCategories = (page) => {
      
		  // 대분류에 따라 kindId를 설정합니다.
			// switch (mainCategory) {
			// 	case '아우터':
			// 		kindId = 'outer';
			// 		break;
			// 	case '상의':
			// 		kindId = 'top';
			// 		break;
			// 	case '하의':
			// 		kindId = 'bottom';
			// 		break;
			// 	case '세트':
			// 		kindId = 'set';
			// 		break;
			// 	default:
			// 		break;
			// }
		
		// 서버로 요청할 URL 설정
		const url = 'http://10.125.121.184:8080/product/filter/' + selectedCategory +`/${page}`;
	
		// 서버에 GET 요청을 보내고 응답을 처리합니다.
		fetch(url)
			.then(response => {
        console.log('response',response);
				// 서버 응답이 성공인지 확인합니다.
				if (!response.ok) {
					// 응답이 실패한 경우 오류를 throw 합니다.
					throw new Error('Failed to fetch subcategories');
				}
				// JSON 형식으로 응답을 변환합니다.
				return response.json();
			})
			.then(data => {
				// 받아온 데이터를 상태로 업데이트합니다.
				// setSubCategories(data);
        console.log(data)
        if (data.content === null) {return}
        setClothesList(data.content);  // 상품 목록 업데이트
        setItemsCountPerPage(data.pageable.pageSize); // 페이지 상품 개수
        setTotalNum(data.totalElements);  // 전체 상품 수 업데이트
			})
			.catch(error => {
				// 오류가 발생한 경우 콘솔에 오류 메시지를 출력합니다.
				console.error('Failed to fetch subcategories:', error);
			});
	};

  return (
    <div className='flex'>
      <div className='p-4 border-r border-black left-0 min-w-[250px] max-w-[250px] h-auto'>
        {/* <h2 className='font-bold mb-4 mt-16'>Categories</h2> */}
        <ClothesFilter setSubCategory={setSelectedCategory} setPageInit={setPage} />
        {/* {categories.map((category, index) => (
          <button onClick={handleBoolean} key={index} className='border flex flex-col p-2 w-full m-2 justify-center' 
          // onClick={() => setSelectedCategory(category)}
          >{category}</button>
        ))} */}
      </div>
      <div className='flex flex-col flex-grow p-4'>
        <h2 className='font-bold mb-4'>Products</h2>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-4 gap-4 min-w-[900px]'>
          {clothesList && clothesList.map((item, index) =>
          <button onClick={()=>navigate(`../detail/${item.productCode}`)}>
            <div key={index} className='flex flex-wrap justify-center'>
              <div className='border bg-white rounded-lg p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-grow-0 flex-shrink-0' 
              style={{width: '200px', minWidth: '200px', flex: ' 1 0 auto'}}
              >
                <div>
                  <img src={`http://10.125.121.184:8080/product_image/${item.productCode}.jpg`} alt={item.name} 
                  // style={{ width: '100%', height: '250px' }} 
                  className='w-full h-48 object-cover'
                  />
                </div>
                <div className=''>
                  {/* {item.productCode} */}
                </div>
                <div className='font-bold mt-2'>
                  <span>{item.name}</span>
                </div>
                <div>
                  <span>{parseInt(item.price).toLocaleString('ko-KR')}원</span>
                </div>
              </div>
            </div>
            </button>
          )}
        </div>

        {/* {clothesTag} */}
        {/* {products.map((product, index) => (
          <p key={index} className='mb-2'>{product}</p>
        ))} */}
        <div className="flex flex-col justify-center items-center pt-2">
          <Pagination
            activePage={page}   // 현재 페이지
            itemsCountPerPage={itemsCountPerPage}  // 한 페이지에 보여줄 아이템 갯수
            totalItemsCount={totalNum}  // 총 아이템 갯수
            pageRangeDisplayed={10}  // paginator의 페이지 범위
            prevPageText={"‹"} // "이전"을 나타낼 텍스트
            nextPageText={"›"} // "다음"을 나타낼 텍스트
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          />
        </div>
      </div>
    </div>
  )
}