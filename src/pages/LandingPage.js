import React from "react";
import CalendarCard from "../component/CalendarCard";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen p-6">
      <div className="absolute -z-10 w-screen h-full top-0 left-0 overflow-x-hidden overflow-y-hidden">
        <img
          className="h-[95%] absolute bottom-0 left-0 pb-8 -ml-28"
          src="images/rolling-stones-logo.svg"
          alt="logo"
        />
        <img
          className="h-[65%] absolute m-auto left-0 right-0 bottom-0"
          src="images/headstock.webp"
          alt="logo"
        />
        <img
          className="h-[95%] absolute bottom-0 right-0 pb-10 -mr-28"
          src="images/blob-group.svg"
          alt="logo"
        />
      </div>
      <div className="flex items-center flex-col gap-4">
        <p className="font-bold text-black text-6xl">
          THE <span className="text-primary">ROLLING STONES</span> EVENTS
        </p>
        <p className="font-semibold text-sm w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          lorem luctus, sollicitudin eros et, congue eros. Cras consectetur
          gravida libero, id cursus lorem pulvinar ut. Donec vel blandit nibh,
          sagittis venenatis mi.
        </p>
        <p className="font-semibold text-sm w-1/2 -mt-4">
          (Data is available on 15 & 25 October 2023)
        </p>
        <CalendarCard />
      </div>
    </div>
  );
};

export default LandingPage;
