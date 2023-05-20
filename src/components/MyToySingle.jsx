import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MyToySingle = ({mytoy, control, setControl, index}) => {
  const { email, name, price, details, url, subcategory, availablequality, _id, }  = mytoy;
  const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
}

const closeModal = () => {
  setIsModalOpen(false);
}

const handleDelete = (_id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:5000/toys/all/delete/${_id}`,{
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {

        if (data.deletedCount > 0) {
          Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
              )
              setControl(!control)
      }
      })
    }
  })
}

const handleUpdate = (e) =>{
e.preventDefault();
const form = e.target;
        const price = form.price.value;
        const availablequality = form.availablequality.value;
        const details = form.details.value;
        const updatetoys = {price, availablequality, details}

        fetch(`http://localhost:5000/toys/all/email/update/${_id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatetoys)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
          })
          setIsModalOpen(false)
          setControl(!control)
          }
        })

}





  return (
    <tr>
    <th className='flex items-center gap-2'>
    <p>{index + 1}</p>
    <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-secondary btn-circle btn-outline">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={url} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
        </div>
      </div>
    </td>
    <td>
      {email}
    </td>
    <td>{details}</td>
    <td>${price}</td>
    <td>{availablequality}</td>
    <th>
      <button onClick={openModal} className="btn btn-secondary">update
     </button>
     {
        isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="modal modal-open">
      <div className="modal-box text-center">
        <h2 className="modal-title text-2xl text-secondary">Update here</h2>

<form onSubmit={handleUpdate}>
<label style={{justifyContent:'center'}} className="label">
  <span className="label-text text-gray-600">Price : </span>
</label>

        <input type="number" placeholder="Price" name='price' defaultValue={price} className="input text-gray-700 mt-0 input-bordered w-full max-w-xs" />
        <br />
       

        <label style={{justifyContent:'center'}}  className="label">
  <span className="label-text text-gray-600">avalable quantity : </span>
</label>
        <input type="number" placeholder="avalable"
        name='availablequality'
         defaultValue={availablequality} className="input text-gray-700 mt-0 input-bordered w-full max-w-xs" />
        <br />
        

        <label  style={{justifyContent:'center'}} className="label">
  <span className="label-text text-gray-600">details : </span>
</label>
        <input type="text" placeholder="details"
        name='details'
         defaultValue={details} className="input mt-0 input-bordered text-gray-700 w-full max-w-xs" />
      
        <br />
        <input  type="submit" value='submit' className='btn btn-secondary mt-6' />
</form>
        <div className="modal-action">

          <button
            className="btn btn-secondary"
            onClick={closeModal}
          >
            Cencel
          </button>
        </div>
       

        
      </div>
    </div>
  </div>
        )
     }
    
    </th>
  </tr>
  );
};

export default MyToySingle;