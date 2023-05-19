import React from 'react';

const SingleAlltoy = ({alldata, index}) => {
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
          <button className="btn btn-secondary">details
         </button>
         <label htmlFor="my-modal-3" className="btn">details</label>
        </th>
      </tr>
    );
};

export default SingleAlltoy;