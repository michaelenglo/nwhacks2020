import React from "react";
import "./HomePage.scss";
import RestaurantCard from "components/RestaurantCard";
import { withRouter } from 'react-router-dom'
import env from "env";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantPairs: [],
      restaurantMap: {}
    };
    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  async componentDidMount() {
		console.log(`${env.API_ENDPOINT}/restaurants` )

    const res = await fetch(`${env.API_ENDPOINT}/restaurants`);
    const body = await res.json();
    console.log(body);
    // const body = {"data":[{"id":"recj2qaTUGWUohLRG","type":"Restaurant","createdTime":"2020-01-12T09:55:10.000Z","fields":{"Website":"https://www.nwhacks.io","AvgWaitTime":"0.3","ImageName":"nwhacks-food-line-cover.png","Name":"Food Line","PhoneNumber":"(604)-293-5932","Description":"nwHacks 2020 is the gathering of the brightest minds in technology. We have everything! From tacos, to pizza, to 1500 TimBits. Now with the support of QueueUp, hackers can virtually QUEUE for their place in the food line, instead of waiting for infinite time, varied by alphabetization of their last names.","Id":"recj2qaTUGWUohLRG","QueueEntries":[]}},{"id":"rec1h01S3QYVN3Itq","type":"Restaurant","createdTime":"2020-01-12T09:55:02.000Z","fields":{"AvgWaitTime":"10","ImageName":"virtuous-pie-cover.png","Name":"Virtuous Pie","Id":"rec1h01S3QYVN3Itq","QueueEntries":[],"Description":null,"PhoneNumber":null,"Website":null}},{"id":"recPM5WQGPRfdSpKx","type":"Restaurant","createdTime":"2020-01-12T03:53:32.000Z","fields":{"AvgWaitTime":"15","Name":"Sushi California","Id":"recPM5WQGPRfdSpKx","QueueEntries":[],"ImageName":null,"Description":null,"PhoneNumber":null,"Website":null}},{"id":"reckfRINIxOWUanBt","type":"Restaurant","createdTime":"2020-01-12T03:38:56.000Z","fields":{"AvgWaitTime":"5","Name":"Poke Bar","QueueEntries":["rectAhMN0LvFhT2C8","recHEwb1TzKYk1spl","recYJPFII1Y5fOhU3","recMGBr6UhaqXdgA7"],"Id":"reckfRINIxOWUanBt","ImageName":null,"Description":null,"PhoneNumber":null,"Website":null}},{"id":"rechJA3hdaM4WWnct","type":"Restaurant","createdTime":"2020-01-12T03:38:56.000Z","fields":{"AvgWaitTime":"10","ImageName":"chef-hung-cover.png","Name":"Chef Hung","QueueEntries":["recXhLVxUn0FuxO5m","reclzz27RFfPnktDq","recg9co1bPJ58JFAh"],"Id":"rechJA3hdaM4WWnct","Description":null,"PhoneNumber":null,"Website":null}},{"id":"recabCLMLtPp7jM0l","type":"Restaurant","createdTime":"2020-01-12T03:38:56.000Z","fields":{"AvgWaitTime":"20","ImageName":"greenleaf-sushi-cover.png","Name":"Green Leaf Sushi","QueueEntries":["recg9dMLDUWeL0aUp","rec3YUJhsTP79cPxt","recIvhWlck4H2SpUq","recD7iys2maixRIVv","recD2h8MV4OdO35xl"],"Id":"recabCLMLtPp7jM0l","Description":null,"PhoneNumber":null,"Website":null}}]}
    // let map = {};
    this.setState({
      restaurantPairs: body.data.reduce(function(result, value, index, array) {
        // map[value.fields.Id] = value.fields;
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, []),
      // restaurantMap: map
    });
  }

  cardClickHandler(id) {
    this.props.history.push(`/restaurant/${id}`);
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
                      distance="0" time={`${r1.QueueEntries.length * r1.AvgWaitTime}`}
                      ahead={r1.QueueEntries.length}
                      coverUrl={`${env.IMG_ENDPOINT}/${r1.ImageName}`}
                      onClick={this.cardClickHandler}
                      restaurantId={r1.Id}
                    />
                  </div>
                  <div className="col-md">
                    <RestaurantCard
                      name={r2.Name}
                      distance="2.3" time={`${r2.QueueEntries.length * r1.AvgWaitTime}`}
                      ahead={r2.QueueEntries.length}
                      coverUrl={`${env.IMG_ENDPOINT}/${r2.ImageName}`}
                      onClick={this.cardClickHandler}
                      restaurantId={r2.Id}
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