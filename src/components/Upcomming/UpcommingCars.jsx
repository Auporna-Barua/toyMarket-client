import React from "react";

const UpcomingCar = () => {
  return (
    <div
      className="mt-14"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h1 className="text-xl md:text-3xl font-bold mx-auto border-b-2 border-blue-500 pb-2 w-fit mb-5">
        Upcoming Car's
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/Mk3vczr/upcomming2.jpg"
            alt=""
          />
        </div>
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/fFzqx52/upcomming3.webp"
            alt=""
          />
        </div>
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/ZzpgXhz/upcomming4.webp"
            alt=""
          />
        </div>
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/f8mrY4s/upcomming1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingCar;
