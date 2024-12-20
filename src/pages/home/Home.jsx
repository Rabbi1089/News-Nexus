import Plans from "../../components/Plans/Plans";
import Publisher from "../../components/Publisher/Publisher";
import Slider from "../../components/Slider/Slider";
import Statistic from "../../components/Statistic/Statistic";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Slider />
            <Publisher />
            <Statistic />
            <Plans />
        </div>
    );
};

export default Home;