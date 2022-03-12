import Chart from "../../components/chart/chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/widgetLg";
import WidgetSm from "../../components/widgetSm/widgetSm";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart/>
      <div className="homeWidgets">
        <WidgetLg/>
        <WidgetSm/>
      </div>
      </div>
  );
}