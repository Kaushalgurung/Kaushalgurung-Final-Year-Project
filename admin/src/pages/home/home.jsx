import Chart from "../../components/chart/chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/widgetLg";
import WidgetSm from "../../components/widgetSm/widgetSm";
import "./home.css";
import { userData } from "../../dummyData";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetLg/>
        <WidgetSm/>
      </div>
      </div>
  );
}