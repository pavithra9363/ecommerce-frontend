import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProdutItem from '../Components/ProductItem';

const ItemsList = () => {
  const { Items, search } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizeCategories, setSelectedSizeCategories] = useState([]);
  const [filteredItems, setFilteredItems] = useState(Items); // Keep a separate state for filtered items

  // Filters Handlers
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  }; 
  
  const handleSeasonChange = (season) => {
    setSelectedSeasons((prev) =>
      prev.includes(season)
        ? prev.filter((item) => item !== season)
        : [...prev, season]
    );
  };

  const handleSizeCategoryChange = (category) => {
    setSelectedSizeCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // useEffect to filter items based on selected filters and search term
  useEffect(() => {
    const filtered = Items.filter((item) => {
      const nameMatch = item.name
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : false; 

      const categoryMatch = selectedCategories.length > 0
        ? selectedCategories.includes(item.category)
        : true;

      const seasonMatch = selectedSeasons.length
        ? selectedSeasons.includes(item.season)
        : true;

      const sizeCategoryMatch = selectedSizeCategories.length
        ? selectedSizeCategories.includes(item.sizeCategory)
        : true;

      // Return filtered items based on all conditions
      return categoryMatch && seasonMatch && sizeCategoryMatch && nameMatch;
    });

    setFilteredItems(filtered); 
  }, [Items, search, selectedCategories, selectedSeasons, selectedSizeCategories]);

  
  return (
    <div className="container mx-auto flex  sm:flex-row bg-cover bg-center min-h-screen">
      {/* Filters Section */}
      <div className="filters flex-shrink-0 p-4 border-b sm:border-b-0 sm:border-r bg-white shadow-md mb-4 sm:mb-0">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Filters</h3>
  
        {/* Category Filter */}
        <div className="filter-section mb-6">
          <h4 className="font-semibold text-lg mb-2 text-gray-700">Product Category</h4>
          {['Fruit', 'Vegetable', 'Grain'].map((category) => (
            <label key={category} className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
  
        {/* Season Filter */}
        <div className="filter-section mb-6">
          <h4 className="font-semibold text-lg mb-2 text-gray-700">Season</h4>
          {['Winter', 'Summer', 'Rainy', 'Spring'].map((season) => (
            <label key={season} className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                onChange={() => handleSeasonChange(season)}
                className="form-checkbox"
              />
              <span>{season}</span>
            </label>
          ))}
        </div>
  
        {/* Size Category Filter */}
        <div className="filter-section mb-6">
          <h4 className="font-semibold text-lg mb-2 text-gray-700">Size Category</h4>
          {['Small', 'Medium', 'Large'].map((size) => (
            <label key={size} className="flex items-center space-x-2 text-gray-600">
              <input
                type="checkbox"
                onChange={() => handleSizeCategoryChange(size)}
                className="form-checkbox"
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>
  
      {/* Products Section */}
      <div className="products flex-1 bg-gray-100">
        <h3 className="text-xl font-bold mb-10 text-gray-800">Products</h3>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <ProdutItem 
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                className="product-item"
              />
            ))
          ) : (
            <p className="text-gray-600">No products match the selected filters or search term.</p>
          )}
        </div>
      </div>
    </div>
  );
  
  
  }
  
  export default ItemsList;