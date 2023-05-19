import React, { useState } from 'react';

const SingleAlltoy = ({alldata, index}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
      };
      


    const { name, sellername, url, subcategory, availablequality, price}= alldata
    return (
        <tr>
        <th>
        <button>{index + 1}</button>
          {/* <label>
            <input value={index + 1} />
          </label> */}
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
          {sellername}
        </td>
        <td>{subcategory}</td>
        <td>${price}</td>
        <td>{availablequality}</td>
        <th>
          <button onClick={openModal} className="btn btn-secondary">details
         </button>
         {
            isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="modal-title">Modal Title</h2>
          <p className="modal-text">Modal content goes here.</p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={closeModal}
            >
              Close
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

export default SingleAlltoy;