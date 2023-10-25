import { BsFillCarFrontFill, BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineGoogle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-[#151515] py-32 xl:px-32 lg:px-20 md:px-16 px-5  text-center md:text-left md:justify-evenly gap-12 md:gap-20 lg:gap-5  text-white grid md:grid-cols-2 lg:grid-cols-4 ">
      <div className="">
        <div className="text-primary flex items-center mx-auto gap-2 justify-center md:justify-start font-secondary">
          <BsFillCarFrontFill className="text-[2rem] xl:text-[3rem]" />
          <p className="text-2xl xl:text-3xl font-semibold">AutoFix Pro</p>
        </div>
        <p className="xl:text-lg leading-loose xl:leading-loose font-medium my-5">
          {`Your trusted partner in automotive excellence. We're dedicated to
          keeping your ride running smoothly and safely.`}
        </p>
        <div className="flex items-center gap-3 xl:gap-5 justify-center md:justify-start">
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
      <div className="lg:mx-auto">
        <h2 className="text-xl xl:text-2xl font-semibold mb-5">About</h2>
        <p className="xl:text-lg font-medium">Home</p>
        <p className="xl:text-lg font-medium my-2">Service</p>
        <p className="xl:text-lg font-medium">Contact</p>
      </div>
      <div className="lg:mx-auto">
        <h2 className="text-xl xl:text-2xl font-semibold mb-5">Company</h2>
        <p className="xl:text-lg font-medium">Why AutoFix Pro</p>
        <p className="xl:text-lg font-medium my-2">About</p>
      </div>
      <div className="lg:mx-auto">
        <h2 className="text-xl xl:text-2xl font-semibold mb-5">Support</h2>
        <p className="xl:text-lg font-medium">Support Center</p>
        <p className="xl:text-lg font-medium my-2">Feedback</p>
        <p className="xl:text-lg font-medium">Accesbility</p>
      </div>
    </div>
  );
}
