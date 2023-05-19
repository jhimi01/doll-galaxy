import { useEffect, useState } from "react";
import SingleAlltoy from "../../components/SingleAlltoy";
import { FaSistrix } from "react-icons/fa";

const AllToys = () => {
  const [alldatas, setAlldatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys/all")
      .then((res) => res.json())
      .then((data) => setAlldatas(data));
  }, []);

  console.log(alldatas);
  return (
    <div className="w-full md:w-5/6 md:px-0 px-3 mx-auto mt-7">
      <div className="overflow-x-auto w-full">

      <div className="md:w-2/3 mx-auto my-5 relative">
         <input type="text" placeholder="search by toy name" className="input input-bordered w-full " />
         <FaSistrix className="absolute right-4 cursor-pointer text-2xl  bottom-3"/>
      </div>

        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                  <button>#</button>
              </th>
              <th>Toy name</th>
              <th>Owner Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {alldatas.map((alldata, index) => (
              <SingleAlltoy alldata={alldata} index={index} key={alldata._id}></SingleAlltoy>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AllToys;
