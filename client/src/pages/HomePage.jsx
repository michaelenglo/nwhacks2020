import React from "react";
import "./HomePage.scss";
import RestaurantCard from "components/RestaurantCard";

export default function HomePage() {
  return (
    <div className="homepage">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <RestaurantCard name="Chef Hung" distance="1.5" time={[11, 20]} ahead="12"/>
          </div>
          <div class="col-sm">
            <RestaurantCard name="Chef Hung" distance="1.5" time={[11, 20]} ahead="12"/>
          </div>
        </div>
      </div>
    </div>
  );
}
