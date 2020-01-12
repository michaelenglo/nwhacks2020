import React from "react";
import "./ManagerPage.scss";
import RestaurantCard from "components/RestaurantCard";
import { withRouter } from 'react-router-dom'
import env from "env";

class ManagerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: [],
            restaurantQueueEntries: [],
        };
    }

    async componentDidMount() {
        // console.log(`${env.API_ENDPOINT}/restaurants` )

        // const res = await fetch(`${env.API_ENDPOINT}/restaurants`);
        // const body = await res.json();
        // console.log(body);
        const body = {
            "data": [
                {
                    "id": "recj2qaTUGWUohLRG",
                    "type": "QueueEntry",
                    "createdTime": "2020-01-12T09:55:10.000Z",
                    "fields": {
                        "AutomationID": 1,
                        "Restaurant": "recabCLMLtPp7jM0l",
                        "User": "rec6iXgZaARKeespv",
                    }
                },
            ]
        };
        // let map = {};
        this.setState({
            restaurantQueueEntries: body.data,
            // restaurantMap: map
        });
    }

    render() {
        return (
            <div className="managerpage">
                <div className="container">
                    {
                        this.state.restaurantQueueEntries.map(qE => (
                            <div className="row">
                                <div className="col-md">
                                    <div className="card">
                                        <div className="card-title">{qE.fields.User}</div>
                                        <div className="card-body">{qE.fields.Restaurant}</div>
                                        <button type="button" onClick={() => {}} className="close">Close</button> 
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ManagerPage); 