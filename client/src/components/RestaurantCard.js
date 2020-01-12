import React from "react";
import "./RestaurantCard.scss";

export default function RestaurantCard(props) {
  return (
    <div class="restaurant-card">
      <div class="card">
        {'heelo' + process.env.API_ENDPOINT}
        <img src="./test-logo.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <button type="button" class="btn btn-link btn-lg btn-block"><h5 class="card-title">Queue Up!</h5></button>
        </div>
      </div>
    </div>
  );
}
