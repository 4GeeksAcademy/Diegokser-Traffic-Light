import React, {useState}  from "react";
import TrafficLight from "./TrafficLight.js";

//create your first component
const Home = () => {
	const [ligth, setLight] = useState("circleRed")


	return (
		<div className="text-center">
			<TrafficLight setLight={setLight}/>
		</div>
	);
};

export default Home;
