import React from "react";
import "./HomePage.scss";
import RestaurantCard from "components/RestaurantCard";

export default function HomePage() {
  return (
    <div className="homepage">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <RestaurantCard name="Chef Hung" distance="1.5" time={[11, 20]} ahead="12"
              coverUrl="http://127.0.0.1:8080/assets/img/chef-hung-cover.png"
            />
          </div>
          <div class="col-md">
            <RestaurantCard name="Biercraft" distance="1.5" time={[11, 20]} ahead="12"
              coverUrl="http://127.0.0.1:8080/assets/img/biercraft-cover.png"            
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md">
            <RestaurantCard name="Virtuous Pie" distance="1.5" time={[11, 20]} ahead="12"
              coverUrl="http://127.0.0.1:8080/assets/img/virtuous-pie-cover.png"
            />
          </div>
          <div class="col-md">
            <RestaurantCard name="nwHacks Food Line" distance="1.5" time={[11, 20]} ahead="12"
              coverUrl="http://127.0.0.1:8080/assets/img/nwhacks-food-line-cover.png"            
            />
          </div>
        </div>
      </div>
    </div>
  );
}
