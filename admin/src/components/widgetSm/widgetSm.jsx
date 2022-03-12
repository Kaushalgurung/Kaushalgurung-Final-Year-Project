import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Customer</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://assets3.thrillist.com/v1/image/3055763/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dummy user</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://assets3.thrillist.com/v1/image/3055763/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dummy user</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://assets3.thrillist.com/v1/image/3055763/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dummy user</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://assets3.thrillist.com/v1/image/3055763/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dummy user</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://assets3.thrillist.com/v1/image/3055763/414x310/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Dummy user</span>
            <span className="widgetSmUserTitle">Customer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}