import React, { useState } from "react";

function GeceModunuAc(initialMode = false) {
  const [geceModu, setGeceModu] = useState(initialMode);

  const toggleMode = () => {
    // console.log ("geceModunuAc.js: toggleMode() çalıştı");
    setGeceModu(!geceModu);
  };
  return [geceModu, toggleMode];
}
export default GeceModunuAc;
