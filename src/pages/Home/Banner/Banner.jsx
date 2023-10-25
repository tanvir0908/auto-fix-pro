import "./Banner.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Banner() {
  return (
    <div className="mx-5 md:mx-12 lg:mx-20 xl:mx-32">
      <div className="carousel h-[80vh] w-full">
        <div
          id="slide1"
          className="banner1 rounded-xl carousel-item relative w-full"
        >
          <div className="absolute flex flex-col justify-center space-y-8 text-white pl-5 pr-5 md:pr-0 md:pl-16 lg:pl-20 xl:pl-32 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl w-full bottom-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl leading-tight font-[700] w-[25rem]">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-full md:w-[25rem] lg:w-[30rem] xl:w-[35rem] leading-loose xl:text-lg font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex md:w-[25rem] gap-5">
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
                Discover More
              </button>
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 text-white hover:shadow-md  font-semibold rounded-lg border-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-5 right-10 md:right-16 bottom-8 md:bottom-11">
            <a
              href="#slide6"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowLeft size={25} />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowRight size={25} />
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="banner2 rounded-xl carousel-item relative w-full"
        >
          <div className="absolute flex flex-col justify-center space-y-8 text-white pl-5 pr-5 md:pr-0 md:pl-16 lg:pl-20 xl:pl-32 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl w-full bottom-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl leading-tight font-[700] w-[25rem]">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-full md:w-[25rem] lg:w-[30rem] xl:w-[35rem] leading-loose xl:text-lg font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex md:w-[25rem] gap-5">
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
                Discover More
              </button>
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 text-white hover:shadow-md  font-semibold rounded-lg border-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-5 right-10 md:right-16 bottom-8 md:bottom-11">
            <a
              href="#slide1"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowLeft size={25} />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowRight size={25} />
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="banner3 rounded-xl carousel-item relative w-full"
        >
          <div className="absolute flex flex-col justify-center space-y-8 text-white pl-5 pr-5 md:pr-0 md:pl-16 lg:pl-20 xl:pl-32 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl w-full bottom-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl leading-tight font-[700] w-[25rem]">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-full md:w-[25rem] lg:w-[30rem] xl:w-[35rem] leading-loose xl:text-lg font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex md:w-[25rem] gap-5">
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
                Discover More
              </button>
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 text-white hover:shadow-md  font-semibold rounded-lg border-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-5 right-10 md:right-16 bottom-8 md:bottom-11">
            <a
              href="#slide2"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowLeft size={25} />
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowRight size={25} />
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="banner4 rounded-xl carousel-item relative w-full"
        >
          <div className="absolute flex flex-col justify-center space-y-8 text-white pl-5 pr-5 md:pr-0 md:pl-16 lg:pl-20 xl:pl-32 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl w-full bottom-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl leading-tight font-[700] w-[25rem]">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-full md:w-[25rem] lg:w-[30rem] xl:w-[35rem] leading-loose xl:text-lg font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex md:w-[25rem] gap-5">
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
                Discover More
              </button>
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 text-white hover:shadow-md  font-semibold rounded-lg border-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-5 right-10 md:right-16 bottom-8 md:bottom-11">
            <a
              href="#slide3"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowLeft size={25} />
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowRight size={25} />
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="banner5 rounded-xl carousel-item relative w-full"
        >
          <div className="absolute flex flex-col justify-center space-y-8 text-white pl-5 pr-5 md:pr-0 md:pl-16 lg:pl-20 xl:pl-32 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl w-full bottom-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl leading-tight font-[700] w-[25rem]">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-full md:w-[25rem] lg:w-[30rem] xl:w-[35rem] leading-loose xl:text-lg font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex md:w-[25rem] gap-5">
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
                Discover More
              </button>
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 text-white hover:shadow-md  font-semibold rounded-lg border-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-5 right-10 md:right-16 bottom-8 md:bottom-11">
            <a
              href="#slide4"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowLeft size={25} />
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowRight size={25} />
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className="banner6 rounded-xl carousel-item relative w-full"
        >
          <div className="absolute flex flex-col justify-center space-y-8 text-white pl-5 pr-5 md:pr-0 md:pl-16 lg:pl-20 xl:pl-32 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl w-full bottom-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl leading-tight font-[700] w-[25rem]">
              Affordable Price For Car Servicing
            </h2>
            <p className="w-full md:w-[25rem] lg:w-[30rem] xl:w-[35rem] leading-loose xl:text-lg font-medium">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex md:w-[25rem] gap-5">
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
                Discover More
              </button>
              <button className="border-2 xl:text-lg w-full text-center px-3 py-3 text-white hover:shadow-md  font-semibold rounded-lg border-white">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex gap-5 right-10 md:right-16 bottom-8 md:bottom-11">
            <a
              href="#slide5"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowLeft size={25} />
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-primary hover:bg-primary border-none text-white"
            >
              <FiArrowRight size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
