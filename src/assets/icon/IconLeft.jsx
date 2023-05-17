import React from "react";

function IconLeft(props) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={36}
        fill="none"
        {...props}
        className="icon__left"
      >
        <path
          fill="#000"
          d="M2.333 18h37.334H2.333Zm37.334 0-16-16 16 16Zm0 0-16 16 16-16Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M2.333 18h37.334m0 0-16-16m16 16-16 16"
        />
      </svg>
    )
}

export default IconLeft