import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <Link to="/" className="link">
          <span className="logo">औशधि पसल</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media.istockphoto.com/vectors/anime-face-character-from-cartoon-manga-hero-in-japanese-style-vector-id1130046869?k=20&m=1130046869&s=170667a&w=0&h=MSGoHdmF7a8RILiBVtYrHkJWaypUj6MlTdt4Q2FHvVA=" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}