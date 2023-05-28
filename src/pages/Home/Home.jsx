import CategoriesTab from "../../components/CategoryTab/CategoriesTab";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Hero/Header";
import MiniCars from "../../components/MiniCar/MiniCars";
import UpcomingCar from "../../components/Upcomming/UpcommingCars";
import useTitle from "../../hook/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
    <Header />
      <Gallery />
      <div className="mb-10">
      <CategoriesTab />
      </div>
        <UpcomingCar />
        <MiniCars />
    </div>
  );
};

export default Home;
