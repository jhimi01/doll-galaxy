import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthPrvider/AuthProvider';
import MyToySingle from '../../components/MyToySingle';
const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);
    const [control, setControl] = useState(false);


    const url = `http://localhost:5000/toys/all/email?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [url, control]);

    console.log(mytoys);


   



    return (
        <div className="w-full md:w-5/6 md:px-0 px-3 mx-auto mt-7">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                  <button>#</button>
              </th>
              <th>Toy name</th>
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