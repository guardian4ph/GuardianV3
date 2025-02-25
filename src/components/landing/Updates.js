import React from "react";
import Update from "./Update";

import alerts from "../../../src/data/Updates.json";

import "./Updates.css";

const Updates = () => {
  return (
    <div className="smooth_loading ">
      <Update data={alerts} />
    </div>
  );
};

export default Updates;
