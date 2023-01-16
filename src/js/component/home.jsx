import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const TrafficLight = () => {
	const [color, setColor] = useState("");
    const [index, setIndex] = useState(0);
	const colorLight = ["red", "yellow", "green"];
	const [opened, setOpened] = useState(true);

	const manual = () => {
		setIndex(index+1)
		setColor(colorLight[index]);
		if (index >= 2) {
			setIndex (0)	
		}
	}

    const automatic = () => {
		let index = 0;
		const colorLight = ["red", "yellow", "green"];
		setInterval(() => {
		  if (index <= colorLight.length) {
			setColor(colorLight[index]);
			index++;
		  } else {
			return false;
		  }
		}, 500);
	  };

	return ( 
	<>
	   <div className="container">
	   <div className="box"></div>
	   <div  id="trafficlights">
		   <div className={"red " + (color === "red" ? "brillo" : "")} onClick={() => setColor("red")}></div>
		   <div className={"yellow " + (color === "yellow" ? "brillo" : "")} onClick={() => setColor("yellow")}></div>
		   <div className={"green " + (color === "green" ? "brillo" : "")} onClick={() => setColor("green")}></div>
		   <div className={"purple " + (color === "purple" ? "brillo" : "")} onClick={() => setColor("purple")}></div>
      
		</div>
		<div className="d-grid  col-6 mx-auto">
		<button className="btn btn-outline-dark m-3" onClick={manual}>
		   Hand cycle
        </button>
		<button className="btn btn-outline-dark m-3 " onClick={automatic}>
		   Automatic cycle
        </button>
		</div>
		</div>
		</>
	);
  };

export default TrafficLight;
