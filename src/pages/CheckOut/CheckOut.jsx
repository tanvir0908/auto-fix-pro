import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

export default function CheckOut() {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    // const email = form.email.value;

    const booking = {
      name,
      email: user?.email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Booking added successfully", "success");
        }
      });
  };

  return (
    <div className="mx-32">
      <h2 className="text-center text-4xl font-bold">Book Service: {title}</h2>
      <div className="w-2/3 mx-auto">
        <form className="card-body" onSubmit={handleBookService}>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="phone"
                name="phone"
                value={price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="border py-2 px-4 rounded-lg w-full border-gray-300"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value={"Order Confirm"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
