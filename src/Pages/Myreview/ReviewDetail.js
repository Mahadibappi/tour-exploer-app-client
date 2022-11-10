import React from "react";

const ReviewDetail = () => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
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
            <div className="font-bold">customer</div>
          </div>
        </div>
      </td>
      <td>message</td>
      <td>Purple</td>
    </tr>
  );
};

export default ReviewDetail;
