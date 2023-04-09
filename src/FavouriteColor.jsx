import React, { useState } from "react";
import "./FavouriteColor.css"

function FavouriteColor() {
  const [color, setColor] = useState("color");

  return (
    <div className="favourite">
      <h1 style={{color:color}}>My Favourite color is {color}</h1>
      <button type="button" onClick={() => setColor("blue")} style={{backgroundColor:color}} >
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")} style={{backgroundColor:color}} >
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")} style={{backgroundColor:color}} >
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")} style={{backgroundColor:color}} >
        Green
      </button>
      <button type="button" onClick={() => setColor("violet")} style={{backgroundColor:color}} >
        Violet
      </button>
    </div>
  );
}

export default FavouriteColor;
