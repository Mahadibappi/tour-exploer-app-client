import React from "react";

const ReviewDetail = ({ my, handleDelete }) => {
  const { _id, customerName, serviceName, message } = my;

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-info">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://149351115.v2.pressablecdn.com/wp-content/uploads/2021/06/bio-2.jpg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
          </div>
        </div>
      </td>
      <td>{message}</td>
      <td>{serviceName}</td>
    </tr>
  );
};

export default ReviewDetail;
