import React from "react";
import Image from "next/image";
import CardOne from "../assets/explore-card/cardfirst.jpg";
import CardTwo from "../assets/explore-card/cardsecond.jpg";
import CardThree from "../assets/explore-card/cardthird.jpg";
import CardForth from "../assets/explore-card/cardforth.jpg";

function ExploreCard() {
  const cities = [
    {
      image: CardOne,
      title: "New York",
      location: "Location",
      discout: 370,
      actualPrice: 250,
      timeDuration: "Tue, Jul 20 - Fri, Jul 23",
      rating: "4.9",
    },
    {
      image: CardTwo,
      title: "Vancouver Canada",
      location: "Location",
      discout: 375,
      actualPrice: 260,
      timeDuration: "Tue, Jul 26 - Fri, Jul 30",
      rating: "4.4",
    },
    {
      image: CardThree,
      title: "London, Uk",
      location: "Location",
      discout: 200,
      actualPrice: 150,
      timeDuration: "Tue, June 20 - Fri, July 23",
      rating: "4.2",
    },
    {
      image: CardForth,
      title: "Dubai",
      location: "Location",
      discout: 400,
      actualPrice: 250,
      timeDuration: "Tue, Jul 20 - Fri, Jul 23",
      rating: "5.0",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-11">
      {cities.map((city, index) => (
        <div className="flex flex-col w-1/4" key={index}>
          <div className="overflow-hidden flex justify-center items-center ">
            <Image
              src={city.image}
              alt="city"
              height={200}
              width={550}
              objectFit="cover"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-md font-semibold ">{city.title}</p>
              <span>{city.location}</span>
            </div>
            <div className="flex flex-col">
              <span>${city.discout}</span>
              <span>${city.actualPrice}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>{city.timeDuration}</span>
            <span>{city.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreCard;
