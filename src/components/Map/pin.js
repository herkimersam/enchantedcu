import React, { memo } from "react";

const ICON = `M138.7,175.5l-19.2,52.1a8,8,0,0,1-15,0L85.3,175.5a8.1,8.1,0,0,0-4.8-4.8L28.4,151.5a8,8,0,0,1,0-15l52.1-19.2a8.1,8.1,0,0,0,4.8-4.8l19.2-52.1a8,8,0,0,1,15,0l19.2,52.1a8.1,8.1,0,0,0,4.8,4.8l52.1,19.2a8,8,0,0,1,0,15l-52.1,19.2A8.1,8.1,0,0,0,138.7,175.5Z`;

const pinStyle = {
  cursor: "pointer",
  fill: "#f5a142",
  stroke: "#none",
};

function Pin({ size = 20 }) {
  return (
    <svg height={size} viewBox="0 0 256 256" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
}

export default memo(Pin);
