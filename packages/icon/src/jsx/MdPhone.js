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
      d="M9.912 10.27l-.85.85c-.442.442-.608.874-.551 1.37.077.685.3 1.395.65 2.08l.507.866c.327.559.797 1.288 1.403 2.177.61.895 1.35 1.895 2.214 2.995a36.453 36.453 0 002.869 3.218 36.403 36.403 0 003.217 2.868 55.5 55.5 0 002.995 2.214 39.52 39.52 0 002.18 1.405l.816.48c.733.375 1.443.6 2.13.677.495.056.927-.11 1.369-.551l.792-.793c-1.725-.855-3.92-2.303-6.596-4.348a63.366 63.366 0 01-2.4-1.874 32.73 32.73 0 01-4.58-4.58 63.609 63.609 0 01-1.853-2.369c-2.079-2.74-3.515-4.966-4.312-6.685zm.75-.75a.503.503 0 01.047.084c.662 1.512 1.905 3.504 3.727 5.968l1.284-1.308c.131-.131.173-.232.166-.367a1.279 1.279 0 00-.233-.662l-3.432-4.646c-.059-.085-.085-.098-.214-.087a.875.875 0 00-.585.257l-.76.76zm19.74 19.857l.819-.819a.875.875 0 00.257-.585c.01-.129-.001-.155-.116-.234l-4.589-3.392a1.32 1.32 0 00-.69-.254c-.136-.006-.238.036-.374.172l-1.302 1.28c2.453 1.834 4.455 3.112 5.995 3.832zM24.3 22.844c.52-.518 1.164-.78 1.879-.749.612.031 1.193.236 1.755.623l4.59 3.392c.684.471 1.016 1.192.947 2.028a2.87 2.87 0 01-.836 1.835l-2.36 2.36c-.859.858-1.886 1.252-3.008 1.124-.935-.106-1.876-.402-2.864-.91-.146-.085-.436-.254-.869-.509a41.311 41.311 0 01-2.295-1.478 57.457 57.457 0 01-3.105-2.294 38.402 38.402 0 01-3.394-3.026 38.453 38.453 0 01-3.027-3.396 57.678 57.678 0 01-2.294-3.104 41.216 41.216 0 01-1.476-2.292c-.255-.434-.425-.725-.536-.918-.482-.942-.779-1.883-.883-2.815-.128-1.124.265-2.151 1.123-3.01l2.36-2.36a2.87 2.87 0 011.833-.836c.836-.07 1.56.263 2.01.92l3.432 4.645a3.3 3.3 0 01.602 1.728c.034.712-.23 1.356-.743 1.87l-.78.795a65.83 65.83 0 001.263 1.589 30.73 30.73 0 004.3 4.3c.549.45 1.078.87 1.589 1.263l.787-.775z"
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
const MdPhone = withWrapper(Vector);
MdPhone.groupName = "Misc";
export default MdPhone;
