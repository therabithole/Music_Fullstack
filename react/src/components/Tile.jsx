import React, { useEffect, useState } from "react";

import CheckBox from "./common/CheckBox";
import CD from "./../assets/icons/CD";

const Tile = (props, { label, id, name, value, selected, ...rest }) => {
 


  return (
    <React.Fragment>
         <div className="tile-name">{props.title} </div>
      {props.children}
      <section className="checkboxGroup">
   <input
        type="checkbox"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={selected}
 
  
      />
    
      </section> 
 


    </React.Fragment>
  );
};

export default Tile;



const MultiForm = ({ label, id, name, value, ...rest }) => {
  const [seclected, setSelected] = useState([{
    tiles: [],
    filtered: []
  }]);

  const handleChange = (e) => {

   	const { value, checked } = e.currentTarget;

	console.log(e.currentTarget, "whats is this check")
  }

 

  useEffect(() => {}, []);
  return (
    <section className="checkboxGroup">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
  
        onChange={handleChange}
       
  
      />
      <label htmlFor={name}> {label}</label>
    </section>
  );
};


