import React from "react";
import PropTypes from "prop-types";

/**
 * A reusable section wrapper to ensure consistent spacing and layout
 * across all sections of the site.
 *
 * Props:
 * - id: (optional) used for anchor links and navigation
 * - className: (optional) to add custom styles
 * - children: section content
 */
export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`py-section-md md:py-section-lg mt-section-md ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

SectionWrapper.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
