import Gallery from "../../components/Gallery/Gallery";
import MiniCars from "../../components/MiniCar/MiniCars";
import UpcomingCar from "../../components/Upcomming/UpcommingCars";
import useTitle from "../../hook/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Gallery />
      <div className="mb-10">
        <UpcomingCar />
        <MiniCars />
      </div>
    </div>
  );
};

export default Home;
