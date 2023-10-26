import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-20 xl:px-32 lg:px-20 md:px-12 px-5">
      <div className="space-y-5 text-center">
        <h3 className="text-3xl">Our Services</h3>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p className="w-[40%] mx-auto">
          {`
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
          `}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}
