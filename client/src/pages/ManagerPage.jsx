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
            restaurantId: "recabCLMLtPp7jM0l",
            restaurant: {},
            restaurantQueueEntries: [],
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleQueueUp = this.handleQueueUp.bind(this);
    }

    async componentDidMount() {
        const res = await fetch(`${env.API_ENDPOINT}/restaurant/queue_list?RestaurantID=${this.state.restaurantId}`);
        // const body = {
        //     "data": [
        //         {
        //             "id": "recD7iys2maixRIVv",
        //             "userName": "a",
        //             "userPhoneNumber": "123456789",
        //             "restaurantName": "Green Leaf Sushi"
        //         },
        //         {
        //             "id": "recD2h8MV4OdO35xl",
        //             "userName": "Michael",
        //             "userPhoneNumber": " 17787062154",
        //             "restaurantName": "Green Leaf Sushi"
        //         },
        //         {
        //             "id": "recIvhWlck4H2SpUq",
        //             "userName": "Michael",
        //             "userPhoneNumber": " 17787062154",
        //             "restaurantName": "Green Leaf Sushi"
        //         },
        //         {
        //             "id": "rec3YUJhsTP79cPxt",
        //             "userName": "a",
        //             "userPhoneNumber": "123456789",
        //             "restaurantName": "Green Leaf Sushi"
        //         },
        //         {
        //             "id": "recg9dMLDUWeL0aUp",
        //             "userName": "Keith",
        //             "userPhoneNumber": null,
        //             "restaurantName": "Green Leaf Sushi"
        //         }
        //     ]
        // };

        const body = await res.json();
        console.log(body);

        this.setState({ restaurantQueueEntries: body.data });
        // console.log(body);
        // console.log('restaurantId', restaurantId);
        // const restaurant = body.data.filter(r => r.id === restaurantId)[0].fields;
        // console.log(restaurant)
        // this.setState({ restaurant });
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

    render() {
        // const { restaurant } = this.state;
        return (
            <div className="managerpage">
                <div>
                    <h2>Welcome to your queue manager!</h2>
                    <h5>
                        <FaRegHourglass />&nbsp;&nbsp;
                        {this.state.restaurantQueueEntries && `~${this.state.restaurantQueueEntries.length * this.state.AvgWaitTime} Min`}
                    </h5>
                    <h2>
                        <MdPeopleOutline />&nbsp;&nbsp;
                        {this.state.restaurantQueueEntries ? this.state.restaurantQueueEntries.length : ''}
                    </h2>
                    <div>
                        <button type="button" onClick={async () => {
                            const url = `${env.API_ENDPOINT}/pop_from_queue?RestaurantID=${this.state.restaurantId}`;
                            console.log('request:', url);
                            const res = await fetch(url);
                            window.location.reload();
                        }} className="arrived">Party Arrived</button>
                        <button type="button" onClick={() => { }} className="cancelled">Party Cancelled</button>
                    </div>
                </div>
                {
                    this.state.restaurantQueueEntries.map((qE, i) => (
                        <div className="row">
                            <div className="col">
                                {/* <div className="card">
                                        <div className="card-title">{qE.userName}</div>
                                        <div className="card-body">{qE.userPhoneNumber}</div>
                                    </div> */}
                                <div className="queue-list">
                                    <span style={{ marginRight: 10 }}>{i}.</span>
                                    <span className="flex">{qE.userName}</span>
                                    <span className="flex"><a href="tel:${qE.userPhoneNumber}">{qE.userPhoneNumber}</a></span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(ManagerPage); 