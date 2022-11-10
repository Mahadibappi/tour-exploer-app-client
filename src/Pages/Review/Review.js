import React, { useEffect, useState } from "react";

const Review = () => {
  const [review, setReview] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <div>
        {" "}
        <h2 className="text-4xl text-center mt-5">Customer Review</h2>
      </div>

      {review?.slice(0, 3).map((review) => (
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Review</th>
                  <th>Place</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-5">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://technext.github.io/classimax/images/user/user-thumb.jpg"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{review.customerName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{review.message}</td>
                  <td>{review.serviceName}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
