import React from "react";
import "./RestaurantCard.scss";

export default function RestaurantCard(props) {
  return (
    <div className="restaurant-card">
      <div className="card">
        <div className="card-img" style={{'background': `url(${props.coverUrl})`}}>
          <div className="card-title">
            <h3>{props.name}</h3>
            {`${props.distance}km from you`}
          </div>
          <div className="card-tags">
            <span class="badge badge-dark">{`${props.time[0]}~${props.time[1]}`} min<div>wait time</div></span>
            <span class="badge badge-dark">{props.ahead}<div>people ahead</div></span>
          </div>
        </div>
        <div className="card-body">
          <button type="button" className="btn btn-link btn-lg btn-block"><h5 class="card-title">Queue Up!</h5></button>
        </div>
      </div>
    </div>
  );
}
