import React, { useState } from 'react';

const categories = {
  electronics: ['TV', 'Laptop'],
  furniture: ['Table', 'Chair']
};

function CategorySelector() {
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleMainCategoryClick = (category) => {
    setMainCategory(category);
    setSubCategory('');
  };

  const handleSubCategoryClick = (subCategory) => {
    setSubCategory(subCategory);
    // 여기서 필터를 적용하실 수 있습니다.
    console.log(`Filter applied: ${mainCategory} - ${subCategory}`);
  };

  return (
    <div className='mt-20 bg-white'>
      <div className='flex flex-col'>
        {Object.keys(categories).map(category => (
          <button key={category} onClick={() => handleMainCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>

      {mainCategory && (
        <div className='flex flex-col'>
          {categories[mainCategory].map(subCategory => (
            <button key={subCategory} onClick={() => handleSubCategoryClick(subCategory)}>
              {subCategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySelector;


// import React, { useState } from 'react';

// const categories = {
//   electronics: ['TV', 'Laptop'],
//   furniture: ['Table', 'Chair']
// };

// function CategorySelector() {
//   const [mainCategory, setMainCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');

//   const handleMainCategoryChange = (event) => {
//     setMainCategory(event.target.value);
//     setSubCategory('');
//   };

//   const handleSubCategoryChange = (event) => {
//     setSubCategory(event.target.value);
//   };

//   return (
//     <div className='mt-20'>
//       <select value={mainCategory} onChange={handleMainCategoryChange}>
//         <option value="">Select main category</option>
//         {Object.keys(categories).map(category => (
//           <option key={category} value={category}>{category}</option>
//         ))}
//       </select>

//       <select value={subCategory} onChange={handleSubCategoryChange}>
//         <option value="">Select sub category</option>
//         {mainCategory && categories[mainCategory].map(subCategory => (
//           <option key={subCategory} value={subCategory}>{subCategory}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default CategorySelector;
