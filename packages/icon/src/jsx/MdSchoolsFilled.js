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
      d="M19.5 26H16a1 1 0 00-1 1v3h4.5v-4zm1 0v4H25v-3a1 1 0 00-1-1h-3.5zM34 30c1.333 0 1.333 2 0 2H6c-1.333 0-1.333-2 0-2V19.779c0-1.703 1.38-3.084 2.985-3.08L12 16.404v-1.301a1 1 0 01.434-.825l6.986-4.792a1 1 0 01.08-.05V5.5a.5.5 0 01.653-.476l3.734 1.197a.5.5 0 01.045.935L20.5 8.634v.802a1 1 0 01.08.05l6.986 4.791a1 1 0 01.434.825v1.302l2.917.29A3.084 3.084 0 0134 19.78V30zm-9-9h-4v2h4v-2zm-6 0h-4v2h4v-2zm-1-4.69a2 2 0 104.001-.002A2 2 0 0018 16.31zM9 23h4v-2H9v2zm0 4h4v-2H9v2zm18-4h4v-2h-4v2zm0 4h4v-2h-4v2z"
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
const MdSchoolsFilled = withWrapper(Vector);
MdSchoolsFilled.groupName = "Business";
export default MdSchoolsFilled;
