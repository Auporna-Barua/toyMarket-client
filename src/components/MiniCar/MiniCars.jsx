const MiniCars = () => {
  return (
    <div
      className="my-14"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h1 className="text-lg md:text-3xl font-bold mx-auto border-b-2 border-blue-500 pb-2 w-fit mb-5">
        Our Mini Car's
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/JtC6G6Q/miniCar3.webp"
            alt=""
          />
        </div>
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/Jc5Ly5t/miniCar1.jpg"
            alt=""
          />
        </div>
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/nfPRYXK/miniCar2.jpg"
            alt=""
          />
        </div>
        <div className="border-2 rounded-lg hover:border-black duration-500 transition ease-in-out delay-150 hover:-translate-y-2">
          <img
            className="rounded-lg hover:shadow-lg"
            src="https://i.ibb.co/CMbKQWw/miniCar4.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MiniCars;
