import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const TrafficLight = () => {
	/*Estado para asignarle el brillo*/
	const [color, setColor] = useState("");
	/*Estado para actualizar el index al hacer clik */
    const [index, setIndex] = useState(0);
	/*array colores*/
	const colorLight = ["red", "yellow", "green"];
	/*Estado para mostrar u ocultar color purpura*/
	const [mostrarComponente, setMostrarComponente] = useState(true);

	/*Funcion para cambiar el encedido de semaforo de manera manual al clickear el boton*/
	const manual = () => {
		setIndex(index+1)
		setColor(colorLight[index]);
		if (index >= 2) {
			setIndex (0)	
		}
	}
    /*Funcion al hacer click en el boton camabiara de luz de manera automatica al cada 5seg*/
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
		   <div className={mostrarComponente ? "show-element" : null}>
           {mostrarComponente && <div className={"purple " + (color === "purple" ? "brillo" : "")} onClick={() => setColor("purple")}></div>}
        </div>   
		</div>
		<div className="d-grid  col-4 mx-auto">
		{/*Con un estado adicional le dicen cuando mostrarse o no*/}
		<button className="btn btn-outline-dark m-3" onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton */}
        {mostrarComponente ? `Purple off ` : `Purple on`} </button>
		{/*Boton asociado a la funcion manual*/}
		<button className="btn btn-outline-dark m-3" onClick={manual}>
		   Hand cycle
        </button>
		{/*Boton asociado a la funcion automatica*/}
		<button className="btn btn-outline-dark m-3 " onClick={automatic}>
		   Automatic cycle
        </button>
		</div>
		</div>
		</>
	);
  };

export default TrafficLight;
