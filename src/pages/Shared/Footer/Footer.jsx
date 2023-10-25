import { BsFillCarFrontFill, BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineGoogle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-[#151515] py-32 xl:px-32 lg:px-12 justify-evenly gap-5 md:px-8 px-4 text-white grid md:grid-cols-2 lg:grid-cols-4 ">
      <div className="">
        <div className="text-primary flex items-center gap-2 font-secondary">
          <BsFillCarFrontFill size={40} />
          <p className="text-3xl font-semibold">AutoFix Pro</p>
        </div>
        <p className="text-lg font-medium my-5">
          {`Your trusted partner in automotive excellence. We're dedicated to
          keeping your ride running smoothly and safely.`}
        </p>
        <div className="flex items-center gap-5">
          <AiOutlineGoogle
            className=" text-white bg-text-secondary p-2 rounded-full"
            size={40}
          />
          <BsFacebook
            className="text-white bg-text-secondary p-2 rounded-full"
            size={38}
          />
          <AiFillInstagram
            size={40}
            className="text-white bg-text-secondary p-2 rounded-full"
          />

          <AiFillTwitterCircle
            size={40}
            className="text-white bg-text-secondary p-2 rounded-full"
          />
        </div>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl font-semibold mb-5">About</h2>
        <p className="text-lg font-medium">Home</p>
        <p className="text-lg font-medium my-2">Service</p>
        <p className="text-lg font-medium">Contact</p>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl font-semibold mb-5">About</h2>
        <p className="text-lg font-medium">Home</p>
        <p className="text-lg font-medium my-2">Service</p>
        <p className="text-lg font-medium">Contact</p>
      </div>
      <div className="mx-auto">
        <h2 className="text-2xl font-semibold mb-5">About</h2>
        <p className="text-lg font-medium">Home</p>
        <p className="text-lg font-medium my-2">Service</p>
        <p className="text-lg font-medium">Contact</p>
      </div>
    </div>
  );
}
