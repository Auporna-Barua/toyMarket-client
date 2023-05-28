import banner from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="relative z-10 mb-8 h-screen">
      <img className="h-screen bg-no-repeat w-full bg-cover" src={banner} alt="" />
      <div className="absolute top-0 bg-gradient-to-t from-slate-700 z-20 w-full h-full"></div>
      <div className="absolute top-1/4 md:top-1/3 left-20 sm:left-48 md:left-40 z-50 border-2 lg:p-8 p-2 rounded hover:bg-gray-600 hover:bg-opacity-40 lg:hover:p-10 duration-500 w-3/5   mx-auto">
        <h2 className="lg:font-bold text-2xl md:text-5xl text-white">
          The car's world make's <br /> Enjoyable Everyday.....
        </h2>
        <div className="text-center">
          <button className="bg-white hover:bg-white duration-500 bg-opacity-50 md:p-3 p-2 font-bold mt-5 text-lg md:text-2xl rounded-lg">
            Explore More..
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
