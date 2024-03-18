import React, { useState } from 'react';

const categories = {
  electronics: ['TV', 'Laptop'],
  furniture: ['Table', 'Chair']
};

function CategorySelector() {
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleMainCategoryChange = (event) => {
    setMainCategory(event.target.value);
    setSubCategory('');
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  return (
    <div className='mt-20'>
      <select value={mainCategory} onChange={handleMainCategoryChange}>
        <option value="">Select main category</option>
        {Object.keys(categories).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <select value={subCategory} onChange={handleSubCategoryChange}>
        <option value="">Select sub category</option>
        {mainCategory && categories[mainCategory].map(subCategory => (
          <option key={subCategory} value={subCategory}>{subCategory}</option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
