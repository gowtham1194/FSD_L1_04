import React from "react";
import rx100 from "../image/RX100.jpg";


function ImageComponent() {
  return (
    <div>
      <h1>RX-100</h1>
      <img src={rx100} alt="RX100"  style={{width:"30%",height:"40%"}}/>
    </div>
  );
}

export default ImageComponent;
