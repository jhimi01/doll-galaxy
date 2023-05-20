import { useEffect, useState } from "react";
import SingleAlltoy from "../../components/SingleAlltoy";
import { FaSistrix } from "react-icons/fa";

const AllToys = () => {
  const [alldatas, setAlldatas] = useState([]);
  const [loader, setLoader] = useState(true)
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/toys/all")
      .then((res) => res.json())
      .then((data) => setAlldatas(data));
      setLoader(false)
  }, [loader]);


  const habdleSearch = (value) => {
console.log(value)
if (value.length == 0) {
  fetch("http://localhost:5000/toys/all")
  .then((res) => res.json())
  .then((data) => setAlldatas(data));
}
  fetch(`http://localhost:5000/searchtext/${value}`)
    .then((res) => res.json())
    .then((data) => {
      setAlldatas(data);
    });
    }

    // const handleallview =(id)=>{
    //   fetch(`http://localhost:5000/toys/all/${id}`)
    //   .then((res) => res.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    // }
  

  console.log(alldatas);
  return (
    <div className="w-full md:w-5/6 md:px-0 px-3 mx-auto mt-7">
      <div className="overflow-x-auto w-full">


      <div className="md:w-2/3 mx-auto my-5 relative">
         <input type="text" 
         onChange={e => habdleSearch(e.target.value)} 
        //  onChange={e => setSearch(e.target.value)} 
         placeholder="search by toy name" 
         className="input input-bordered w-full " />
         <FaSistrix onClick={habdleSearch} className="absolute right-4 cursor-pointer text-2xl  bottom-3"/>
      </div>

      { loader ?
        <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center' ,height:'55vh'}}>
       <progress className="progress w-5/6"></progress>
      </div> :  <table className="table w-full">
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
          {/* handleallview={handleallview} */}
       <tbody>
            {alldatas.map((alldata, index) => (
              <SingleAlltoy alldata={alldata}  index={index} key={alldata._id}></SingleAlltoy>
            ))}
          </tbody>
        </table>}

      <p className="text-gray-400 text-xl font-semibold mt-5">limited 20 items</p>
      </div>
     
    </div>
  );
};

export default AllToys;
