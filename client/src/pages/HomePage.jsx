import React from "react";
import "./HomePage.scss";
import RestaurantCard from "components/RestaurantCard";

export default function HomePage() {
  return (
    <div className="homepage">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <RestaurantCard />
          </div>
          <div class="col-sm">
            <RestaurantCard />
          </div>
        </div>
      </div>
    </div>
  );
}
