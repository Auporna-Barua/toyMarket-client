import Gallery from "../../components/Gallery/Gallery";
import useTitle from "../../hook/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Gallery />
      <div className="mb-10">hello</div>
    </div>
  );
};

export default Home;
