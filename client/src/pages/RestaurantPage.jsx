import React from "react";
import "./RestaurantPage.scss";
import { FaRegHourglass } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { MdPeopleOutline } from 'react-icons/md';
import { IoIosInfinite } from 'react-icons/io';
import { GoLocation } from "react-icons/go";
import { MdPhone } from 'react-icons/md';
import { MdWeb } from 'react-icons/md';

export default function RestaurantPage() {
  return (
  	<div>
	    <div>
	    	<img src="http://128.189.94.126:8080/assets/img/nwhacks-food-line-header.jpeg" height="auto" width="100%"/>
	    </div>

	    <div class="info">
	    	<div class="container">
	    		<div class="row">
		  			<div class="col-8">
				    	<div class="container">
					    	<div class="row">
				  				<div class="col-7">
				      				<div class="restaurant-name">
							    		<h1> nwHacks Food Line </h1>
							    	</div>
				    			</div>
				    			<div class="col-md-auto" >
				    				<h5><FaRegHourglass/> Very Long</h5> 
				    				<h6>wait time</h6>
				    			</div>
				    			<div class="col-md-auto">
				    				<h2><MdPeopleOutline/> <IoIosInfinite/></h2> 
				    				<h6>people ahead</h6>
				    			</div>
				    		</div>
				    		<div class="row ">
					    		<div class="col-8">
					    			<p><FaCar/>  0 min drive</p>
					    			<p><GoLocation/>  You are here</p>
					    			<p><MdPhone/>  (604)-293-5932</p>
					    			<p><MdWeb/> <a href="https://www.nwhacks.io">  nwhacks.io</a></p>
					    		</div>
					    		<div class="col-md-auto">
									<button class="btn">Queue Up!</button>    		
					    		</div>
				    		</div>
				    		<div class="row">
					    		<div class="col-md-auto">
					    			<br></br>
					    			<p>
							    	nwHacks 2020 is the gathering of the brightest minds in technology. We have everything! From tacos, to pizza, to 1500 TimBits. 
							    	Now with the support of QueueUp, hackers can virtually QUEUE for their place in the food line, instead of waiting for infinite time, varied by alphabetization of their last names.  
							    	</p> 
							    </div>
				    		</div>
			    		</div>
		    		</div>
		    		<div class="col">
		    			<img src="http://128.189.94.126:8080/assets/img/timbits.jpeg" height="auto" width="80%"/>
		    		</div>
	    		</div>
    		</div>
	    </div>
    </div>
  );
}