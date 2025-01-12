function Services() {
  const services = [
    {
      number: "01",
      title: "Flight Finder",
      para: "Seamless flight search and booking, Search, compare, and book flights effortlessly to destinations worldwide",
    },
    {
      number: "02",
      title: "Hotels Services",
      para: "Find top-rated hotels at the best rates with hassle- free booking and management",
    },
    {
      number: "03",
      title: "Visa processing",
      para: "Simplify your travel with our hassle-free visa processing services",
    },
  ];

  return (
    <div className="px-28 py-14 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold text-center mb-4 leading-[130%]">
        What Services we provide to <br />
        out customers.
      </h2>
      <span className="text-xl">Find trips that find a flexible lifestyle</span>
      <div className="flex justify-center items-center gap-11 mt-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex h-52 w-1/3 flex-col gap-6 bg-white  rounded-2xl p-5 "
          >
            <span>{service.number}</span>
            <span className="text-xl font-semibold mb-2">{service.title}</span>
            <p>{service.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
