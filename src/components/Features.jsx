import Image from "next/image";
import deals from "../../public/Features-deals.svg";
import tour from "../../public/Features-Tour.svg";
import visa from "../../public/features-visa.svg";

function Features() {
  const features = [
    {
      image: <Image src={visa} width={200} height={200} alt="deals" />,
      title: "Visa Processing",
      para: "Streamlind and efficient visa services for smooth travel",
      button: "LEARN MORE",
    },
    {
      image: <Image src={tour} width={80} height={80} alt="deals" />,
      title: "Tour Guide",
      para: "Expert local guides to enhance your travel experience",
      button: "LEARN MORE",
    },
    {
      image: <Image src={deals} width={80} height={80} alt="deals" />,
      title: "Exclusive Deals",
      para: "Special offers and discounts on flights, hotels and tours",
      button: "LEARN MORE",
    },
  ];

  return (
    <div className="px-28 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold">Let's know the feature</h2>
      <span className="text-xl">Find and book a great experience</span>
      <div className="flex justify-center items-center gap-2 mt-14">
        {features.map((featureBox, index) => (
          <div
            className="flex h-52 w-1/3 justify-center items-center gap-6"
            key={index}
          >
            <div className="flex justify-center items-center">
              <span className="rounded-full h-32 w-32 flex justify-center items-center bg-box">
                {featureBox.image}
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-semibold mb-2">
                {featureBox.title}
              </span>
              <p>{featureBox.para}</p>
              <div>
                <button className="bg-button mt-4 px-4 py-1 rounded-full">
                  {featureBox.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
