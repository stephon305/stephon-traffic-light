import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [active,setActive]=useState("red")
	return (
		<div className="text-center">
			<div className="stick"></div>
			<div className="traffic-light">
				<div className={active ==="red" ? "red light glow":"red light"} onClick={()=>setActive("red")}></div>
				<div className={active ==="yellow" ? "yellow light glow":"yellow light"} onClick={()=>setActive("yellow")}></div>
				<div className={active ==="green" ? "green light glow":"green light"} onClick={()=>setActive("green")}></div>
			</div>
		</div>
	);
};

export default Home;
