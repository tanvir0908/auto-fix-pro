/* eslint-disable react/prop-types */
export default function ServiceCard({ service }) {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-full h-[18rem]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-primary">Price: ${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
