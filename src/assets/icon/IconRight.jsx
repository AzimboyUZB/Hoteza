import React from "react";

function IconRight(props) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={36}
        fill="none"
        {...props}
        className="icon__right"
      >
        <path
          fill="#000"
          d="M39.667 18H2.333h37.334ZM2.333 18l16 16-16-16Zm0 0 16-16-16 16Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M39.667 18H2.333m0 0 16 16m-16-16 16-16"
        />
      </svg>
    )
}

export default IconRight