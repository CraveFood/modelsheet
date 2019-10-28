import React from "react";
import PropTypes from "prop-types";

const SmChevronRight = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12.586 12L9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L12.586 12z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmChevronRight.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronRight.groupName = "Actions";
export default SmChevronRight;