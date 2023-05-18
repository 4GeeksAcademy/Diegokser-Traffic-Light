import React, {useState}  from "react";
import TrafficLight from "./TrafficLight.js";

//create your first component
const Home = () => {
	const [light, setLight] = useState("")


	return (
		<div className="text-center">
			<TrafficLight selectedLight={setLight} selectedColor={light} />
		</div>
	);
};

export default Home;
