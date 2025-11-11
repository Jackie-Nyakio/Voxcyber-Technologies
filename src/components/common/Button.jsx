// src/components/common/Button.jsx
import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, variant = "primary", className = "", ...rest }) {
  const base = "inline-flex items-center justify-center rounded-md font-semibold focus:outline-none transition";
  const variants = {
    primary: `bg-vox-500 hover:bg-vox-600 text-white px-5 py-2.5`,
    secondary: `bg-white border border-vox-500 text-vox-700 px-4 py-2`,
    outline: `bg-transparent border border-gray-300 text-gray-700 px-4 py-2`
  };

  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  className: PropTypes.string
};
