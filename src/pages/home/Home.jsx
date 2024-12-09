import Plans from "../../components/Plans/Plans";
import Publisher from "../../components/Publisher/Publisher";
import Slider from "../../components/Slider/Slider";
import Statistic from "../../components/Statistic/Statistic";

const Home = () => {
    return (
        <div>
            <h1 className=" text-6xl">I am from home</h1>
            <Slider />
            <Publisher />
            <Statistic />
            <Plans />
        </div>
    );
};

export default Home;