import about1 from "../../../assets/images/about_us/person.jpg";
import about2 from "../../../assets/images/about_us/parts.jpg";

export default function About() {
  return (
    <div className="xl:px-32 lg:px-20 md:px-12 px-5 my-32">
      <div className="flex items-center gap-10 flex-col md:flex-row">
        <div className="relative">
          <img className="rounded-xl w-3/4" src={about1} alt="" />
          <img
            className="rounded-xl right-32 top-1/2 absolute w-1/2 border-8 border-white"
            src={about2}
            alt=""
          />
        </div>
        <div className="space-y-6">
          <p className="text-primary text-3xl font-semibold">About Us</p>
          <h2 className="text-text-primary text-5xl w-[55%] leading-tight font-semibold">
            We are qualified & of experience in this field
          </h2>
          <p className="text-text-light text-lg font-medium w-[70%]">
            {`There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.`}
          </p>
          <p className="text-text-light text-lg font-medium w-[70%]">
            {`the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. `}
          </p>
          <button className="border-2 xl:text-lg text-center px-3 py-3 bg-primary transition text-white font-semibold rounded-lg border-primary">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
}
