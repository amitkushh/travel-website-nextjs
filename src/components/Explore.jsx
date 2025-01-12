import React from "react";
import ExploreCard from "@/ui/ExploreCard";

function Explore() {
  return (
    <div className="px-28 py-14">
      <div className="flex justify-between items-center ">
        <h2 className="text-4xl font-semibold  mb-4 leading-[130%] w-1/2 text-start">
          Explore the world <br />
          best place for relax!
        </h2>
        <span className="text-sm w-1/2 text-start">
          All-Inclusive vacations and flights to the Caribbean, Indonesian, and
          more than 1,300 destinations worldwide. Now with Xplore Vacations.
        </span>
      </div>
      <div></div>
      <div>
        <ExploreCard />
      </div>
    </div>
  );
}

export default Explore;
