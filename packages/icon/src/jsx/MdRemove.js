import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M21.414 20l4.243 4.243a1 1 0 11-1.414 1.414L20 21.414l-4.243 4.243a1 1 0 11-1.414-1.414L18.586 20l-4.243-4.243a1 1 0 111.414-1.414L20 18.586l4.243-4.243a1 1 0 111.414 1.414L21.414 20z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdRemove = withWrapper(Vector);
MdRemove.groupName = "Actions";
export default MdRemove;
