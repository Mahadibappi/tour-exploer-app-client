import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Review from "../Review/Review";

const Details = () => {
  const { _id, title, img, price, hotel, description } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price: price,
      customerName: name,
      email: email,
      phone: phone,
      message: message,
    };
    fetch("https://travelers-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review placed successfully");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    // service details section
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-1/2" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{title}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <h2 className="card-title">Hotel: {hotel}</h2>
          <p className="w-1/2">{description}</p>
        </div>
      </div>
      {/* customers review section*/}
      <Review></Review>

      {/* Add Review section */}

      <div>
        {user ? (
          <>
            <h3 className="text-4xl text-center  text-teal-500 mt-8">
              Add Review
            </h3>
            <form onSubmit={handleReview} className="flex justify-center">
              <div className="grid grid-cols-1 gap-4 mt-3 mx-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered input-primary w-full"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="input input-bordered input-primary w-full"
                  required
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered input-primary w-full"
                  defaultValue={user?.email}
                />
                <div>
                  <textarea
                    name="message"
                    className="textarea textarea-primary w-full"
                    placeholder="Your Message"
                  ></textarea>
                  <input
                    type="submit"
                    value="Add review"
                    className="mt-3 btn  btn-outline btn-success"
                  />
                </div>
              </div>
            </form>
          </>
        ) : (
          <Link
            className="text-4xl text-bold text-teal-400 flex justify-center mt-8"
            to={"/login"}
          >
            Please login to add Review
          </Link>
        )}
      </div>
    </div>
  );
};

export default Details;
