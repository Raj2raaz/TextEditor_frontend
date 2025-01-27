import React from "react";
import { Link } from "react-router-dom";
import "./elementSidebar.css";

function ElementSidebar({ data }) {
  // console.log(data);
  return (
    <div className="element_container">
      <Link to={data.url}>
        {data.icon && <span className="icon">{data.icon}</span>}
        <span>{data.name}</span>
      </Link>
    </div>
  );
}

export default ElementSidebar;
