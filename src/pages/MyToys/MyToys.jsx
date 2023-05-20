import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../AuthPrvider/AuthProvider';
import MyToySingle from '../../components/MyToySingle';

const MyToys = () => {

  useTitle('My Toys');
  const { user } = useContext(AuthContext)
  const [selectedOption, setSelectedOption] = useState('');
  const [mytoys, setMytoys] = useState([]);
  const [control, setControl] = useState(false);


  // dropdown----------------
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSort = () => {
    // Add your sorting logic here based on the selectedOption
    if (selectedOption === 'lowToHigh') {
      console.log('Sorting items from low to high');
    } else if (selectedOption === 'highToLow') {
      console.log('Sorting items from high to low');
    }
  };
// ----------------

const url = `https://toy-galaxy-server-plum.vercel.app/user/data?email=${user.email}`
useEffect(()=>{
  fetch(url)
  .then(res => res.json())
  .then(data => setMytoys(data))
},[url, control])
// console.log(mytoys)
// console.log(url)






  return (
    <div className='w-full md:w-5/6 px-3 md:px-0 mx-auto '>
    {/* sorting button */}
       <div className="flex items-center justify-center mt-10">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold">Sort Dropdown</h2>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
        <button
          onClick={handleSort}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sort
        </button>
      </div>
    </div>

    <div className="overflow-x-auto w-full mt-10">
    <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                  <button>#</button>
              </th>
              <th className='text-gray-800'>Toy name</th>
              <th>Owner Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mytoys.map((mytoy, index) => (
              <MyToySingle control={control} setControl={setControl} mytoy={mytoy} index={index} key={mytoy._id}
            ></MyToySingle>
            ))}
          </tbody>
        </table>
</div>
    </div>
  );
};

export default MyToys;


