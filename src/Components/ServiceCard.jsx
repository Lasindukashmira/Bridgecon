import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard({ item }) {
  return (
    <div className="serviceCard">
      <div className="innerCard">
        <div className="iconcontainer">
          <FontAwesomeIcon icon={item.icon} className="serviceIcons" />
        </div>

        <h3 className="itemHeading">{item.title}</h3>

        <p className="cdescription">{item.description}</p>
      </div>
    </div>
  );
}
