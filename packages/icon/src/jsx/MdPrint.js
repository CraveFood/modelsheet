import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M28 21h3V11H9v10h3v-3h-1a1 1 0 010-2h18a1 1 0 010 2h-1v3zm0 2v8a1 1 0 01-1 1H13a1 1 0 01-1-1v-8H8a1 1 0 01-1-1V10a1 1 0 011-1h24a1 1 0 011 1v12a1 1 0 01-1 1h-4zm-2-5H14v12h12V18zm-10 4a.5.5 0 110-1h4.4a.5.5 0 110 1H16zm0 3a.5.5 0 110-1h7a.5.5 0 110 1h-7zm0 3a.5.5 0 110-1h7a.5.5 0 110 1h-7zm12-15a.5.5 0 110 1h-4a.5.5 0 110-1h4z"
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
const MdPrint = withWrapper(Vector);
MdPrint.groupName = "Actions";
export default MdPrint;
