import React from "react";
import "./ManagerPage.scss";
import { withRouter } from 'react-router-dom'
import env from "env";
import { FaRegHourglass } from 'react-icons/fa';
import { MdPeopleOutline } from 'react-icons/md';


class ManagerPage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            restaurant: {},
            restaurantQueueEntries: [],
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleQueueUp = this.handleQueueUp.bind(this);
    }

    async componentDidMount() {
        const restaurantId = this.props.location.state.restaurantId;
        // const res = await fetch(`${env.API_ENDPOINT}/restaurants?RestaurantID=${restaurantId}`);
        // const body = await res.json();
    const body = {"data":[{"id":"recj2qaTUGWUohLRG","type":"Restaurant","createdTime":"2020-01-12T09:55:10.000Z","fields":{"Website":"https://www.nwhacks.io","AvgWaitTime":"0.3","ImageName":"nwhacks-food-line-cover.png","Name":"Food Line","PhoneNumber":"(604)-293-5932","Description":"nwHacks 2020 is the gathering of the brightest minds in technology. We have everything! From tacos, to pizza, to 1500 TimBits. Now with the support of QueueUp, hackers can virtually QUEUE for their place in the food line, instead of waiting for infinite time, varied by alphabetization of their last names.","Id":"recj2qaTUGWUohLRG","QueueEntries":[]}},{"id":"rec1h01S3QYVN3Itq","type":"Restaurant","createdTime":"2020-01-12T09:55:02.000Z","fields":{"AvgWaitTime":"10","ImageName":"virtuous-pie-cover.png","Name":"Virtuous Pie","Id":"rec1h01S3QYVN3Itq","QueueEntries":[],"Description":null,"PhoneNumber":null,"Website":null}},{"id":"recPM5WQGPRfdSpKx","type":"Restaurant","createdTime":"2020-01-12T03:53:32.000Z","fields":{"AvgWaitTime":"15","Name":"Sushi California","Id":"recPM5WQGPRfdSpKx","QueueEntries":[],"ImageName":null,"Description":null,"PhoneNumber":null,"Website":null}},{"id":"reckfRINIxOWUanBt","type":"Restaurant","createdTime":"2020-01-12T03:38:56.000Z","fields":{"AvgWaitTime":"5","Name":"Poke Bar","QueueEntries":["rectAhMN0LvFhT2C8","recHEwb1TzKYk1spl","recYJPFII1Y5fOhU3","recMGBr6UhaqXdgA7"],"Id":"reckfRINIxOWUanBt","ImageName":null,"Description":null,"PhoneNumber":null,"Website":null}},{"id":"rechJA3hdaM4WWnct","type":"Restaurant","createdTime":"2020-01-12T03:38:56.000Z","fields":{"AvgWaitTime":"10","ImageName":"chef-hung-cover.png","Name":"Chef Hung","QueueEntries":["recXhLVxUn0FuxO5m","reclzz27RFfPnktDq","recg9co1bPJ58JFAh"],"Id":"rechJA3hdaM4WWnct","Description":null,"PhoneNumber":null,"Website":null}},{"id":"recabCLMLtPp7jM0l","type":"Restaurant","createdTime":"2020-01-12T03:38:56.000Z","fields":{"AvgWaitTime":"20","ImageName":"greenleaf-sushi-cover.png","Name":"Green Leaf Sushi","QueueEntries":["recg9dMLDUWeL0aUp","rec3YUJhsTP79cPxt","recIvhWlck4H2SpUq","recD7iys2maixRIVv","recD2h8MV4OdO35xl"],"Id":"recabCLMLtPp7jM0l","Description":null,"PhoneNumber":null,"Website":null}}]}
        console.log(body);
        console.log('restaurantId', restaurantId);
        const restaurant = body.data.filter(r => r.id === restaurantId)[0].fields;
        console.log(restaurant)
        this.setState({ restaurant });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    async handleQueueUp(info) {
        console.log('handleQueueUp:', info);
        const query = {
            RestaurantID: this.state.restaurant.Id,
            RestaurantName: this.state.restaurant.Name,
            PhoneNumber: info.phoneNumber,
            Name: info.name,
        };
        const url = `${env.API_ENDPOINT}/restaurants/push_to_queue?${this.encodeQueryData(query)}`;
        console.log('request:', url);
        const res = await fetch(url);
        if (res.ok) {
            alert('success!');
        }
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
        // const { restaurant } = this.state;
        return (
            <div className="managerpage">
                <div>
                    <h2>Welcome to your queue manager!</h2>
                    <h5>
                        <FaRegHourglass/>&nbsp;&nbsp;
                        {this.state.restaurantQueueEntries && `~${this.state.restaurantQueueEntries.length * this.state.AvgWaitTime} Min`}
                    </h5>
                    <h2>
                        <MdPeopleOutline/>&nbsp;&nbsp;
                        {this.state.restaurantQueueEntries ? this.state.restaurantQueueEntries.length : ''}
                    </h2>
                    <div>
                        <button type="button" onClick={() => {}} className="arrived">Party Arrived</button>
                        <button type="button" onClick={() => {}} className="cancelled">Party Cancelled</button> 
                    </div>
                </div>
                <div className="container">
                    {
                        this.state.restaurantQueueEntries.map(qE => (
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-title">{qE.fields.User}</div>
                                        <div className="card-body">{qE.fields.Restaurant}</div>
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