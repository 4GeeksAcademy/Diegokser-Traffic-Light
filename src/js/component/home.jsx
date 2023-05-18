import React, {useState}  from "react";
import TrafficLight from "./TrafficLight.js";

//create your first component
const Home = () => {
	const [light, setLight] = useState("")
	
	const stop = () => {
		setLight("circleRed");
	  };

	return (
		<div className="text-center">
			<TrafficLight selectedLight={setLight} selectedColor={light} />
			<button className="btn btn-danger mt-5" onClick={stop}>STOP</button>
		</div>
	);
};

export default Home;
