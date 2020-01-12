import React from "react";
import "./HomePage.scss";
import RestaurantCard from "components/RestaurantCard";
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantPairs: []
    };
    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('http://englo.api.stdlib.com/nwhacks-2020@dev/restaurants');
    const body = await res.json();
    this.setState({
      restaurantPairs: body.data.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, [])
    });
  }

  cardClickHandler() {
    this.props.history.push('/restaurant');
  }

  render() {
    return (
      <div className="homepage">
        <div className="container">
          {
            this.state.restaurantPairs.map((pair) => {
              const r1 = pair[0].fields;
              const r2 = pair[1].fields;
              return (
                <div className="row">
                  <div className="col-md">
                    <RestaurantCard
                      name={r1.Name}
                      distance="1.5" time={`~${r1.QueueEntries.length * r1.AvgWaitTime}`}
                      ahead={r1.QueueEntries.length}
                      coverUrl={`http://127.0.0.1:8080/assets/img/${r1.ImageName}`}
                      onClick={this.cardClickHandler}
                    />
                  </div>
                  <div className="col-md">
                    <RestaurantCard
                      name={r2.Name}
                      distance="1.5" time={`~${r2.QueueEntries.length * r1.AvgWaitTime}`}
                      ahead={r2.QueueEntries.length}
                      coverUrl={`http://127.0.0.1:8080/assets/img/${r2.ImageName}`}
                      onClick={this.cardClickHandler}
                    />
                  </div>
                </div>)
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage); 