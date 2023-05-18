import { Tab, TabList, Tabs } from 'react-tabs';
import './ShopCategory.css'
import { useState } from 'react';
const ShopCategory = () => {
     // Define your categories and sub-categories
     const categories = [
        {
          name: 'baby dolls',
          subCategories: ['Algebra', 'Geometry', 'Puzzles'],
        },
        {
          name: 'barbie',
          subCategories: ['Reading', 'Writing', 'Spelling'],
        },
        {
          name: 'American girl',
          subCategories: ['Building Blocks', 'Robotics', 'Circuitry'],
        },
      ];
    
      const [activeCategory, setActiveCategory] = useState(null);
    
      const handleCategoryHover = (index) => {
        setActiveCategory(index);
      };
    
      const handleCategoryLeave = () => {
        setActiveCategory(null);
      };
    
    return (
        <div >
            <h1 className="text-center text-5xl text-rose-400 font-bold">Shop Category</h1>
            {/* <div className="flex items-center justify-center w-1/2 mx-auto   my-10 ">
  <a className="tab text-2xl tab-lifted tab-active">baby dolls</a> 
  <a className="tab text-2xl tab-lifted ">barbie</a> 
  <a className="tab text-2xl tab-lifted">American girl</a>
</div> */}

<Tabs>
        <TabList className="flex border-b justify-center border-gray-200 my-4">
          {categories.map((category, index) => (
            <Tab
              key={category.name}
              className="py-2 px-4 text-xl text-gray-600 hover:text-gray-900 cursor-pointer relative"
              onMouseEnter={() => handleCategoryHover(index)}
              onMouseLeave={handleCategoryLeave}
            >
              {category.name}
              {activeCategory === index && (
                <div className="absolute left-0 w-full py-2 bg-white shadow-lg mt-2">
                  {category.subCategories.map((subCategory) => (
                    <div
                      key={subCategory}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      {subCategory}
                    </div>
                  ))}
                </div>
              )}
            </Tab>
          ))}
        </TabList>

        {/* {categories.map((category) => (
          <TabPanel key={category.name}>
            <h3 className="text-lg font-bold mb-2">{category.name}</h3>
            <ul className="list-disc list-inside">
              {category.subCategories.map((subCategory) => (
                <li key={subCategory} className="text-gray-600">
                  {subCategory}
                </li>
              ))}
            </ul>
          </TabPanel>
        ))} */}
      </Tabs>

        </div>
    );
};

export default ShopCategory;