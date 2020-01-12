import React from "react";
import "./RestaurantPage.scss";
import { FaRegHourglass } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { MdPeopleOutline } from 'react-icons/md';
import { IoIosInfinite } from 'react-icons/io';
import { GoLocation } from "react-icons/go";
import { MdPhone } from 'react-icons/md';
import { MdWeb } from 'react-icons/md';
import QueueUpModal from "components/QueueUpModal";
import { withRouter } from 'react-router-dom'
import env from "env";

class RestaurantPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			restaurant: {},
			showModal: false,
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

	encodeQueryData(data) {
		const ret = [];
		for (let d in data)
			ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
		return ret.join('&');
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
		const { restaurant } = this.state;
		return (
			<div className="restaurant-page">
				<QueueUpModal
					show={this.state.showModal}
					onClose={this.handleCloseModal}
					onSubmit={this.handleQueueUp}
				/>
				<div>
					<img src={`${env.IMG_ENDPOINT}/nwhacks-food-line-header.jpeg`} height="auto" width="100%"/>
				</div>
	
				<div class="info">
					<div class="container">
						<div class="row">
							<div class="col-8">
								<div class="container">
									<div class="row">
										<div class="col-7">
												<div class="restaurant-name">
												<h1>{restaurant.Name}</h1>
											</div>
										</div>
										<div class="col-md-auto" >
											<h5>
												<FaRegHourglass/>&nbsp;&nbsp;
												{restaurant.QueueEntries && `~${restaurant.QueueEntries.length * restaurant.AvgWaitTime} Min`}
											</h5> 
											<h6>wait time</h6>
										</div>
										<div class="col-md-auto">
											<h2><MdPeopleOutline/>&nbsp;&nbsp;{restaurant.QueueEntries ? restaurant.QueueEntries.length : ''}</h2> 
											<h6>people ahead</h6>
										</div>
									</div>
									<div class="row">
										<div class="col-8">
											<p><FaCar/>&nbsp;&nbsp;0 min drive</p>
											<p><GoLocation/>&nbsp;&nbsp;You are here</p>
											<p><MdPhone/>&nbsp;&nbsp;{restaurant.PhoneNumber}</p>
											<p><MdWeb/>&nbsp;&nbsp;<a href={restaurant.Website}>{restaurant.Website}</a></p>
										</div>
										<div class="col-md-auto">
										<button class="btn" onClick={this.handleOpenModal}>Queue Up!</button>    		
										</div>
									</div>
									<div class="row">
										<div class="col-md-auto">
											<br></br>
											<p>
												{restaurant.Description}
											</p> 
										</div>
									</div>
								</div>
							</div>
							<div class="col">
								<img src={`${env.IMG_ENDPOINT}/timbits.jpeg`} height="auto" width="80%"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(RestaurantPage);