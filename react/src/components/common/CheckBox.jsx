import React, { Component, useState, useEffect } from "react";
const CheckBox = ({ label, id, name, value, ...rest }) => {
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

export default CheckBox;
