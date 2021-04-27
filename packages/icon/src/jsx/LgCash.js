import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M53.55 49.027v-3.73c0-1.712-1.115-2.434-3.475-2.434-2.41 0-3.625.75-3.625 2.433v3.73c0 1.673 1.2 2.4 3.627 2.4 2.377 0 3.473-.698 3.473-2.4zm1.5-3.73v3.73c0 2.708-1.87 3.899-4.973 3.899-3.15 0-5.127-1.2-5.127-3.9v-3.73c0-2.702 1.993-3.933 5.125-3.933 3.088 0 4.974 1.223 4.974 3.933zm1.272 10.427C57.37 53.872 58 51.544 58 49c0-6.127-3.654-11-8-11s-8 4.873-8 11c0 2.544.63 4.872 1.678 6.724.057-.121.12-.245.19-.369.611-1.082 1.52-1.77 2.749-1.77h6.766c1.23 0 2.138.688 2.748 1.77.07.124.134.248.191.37zm-1.057 1.54a4.228 4.228 0 00-.44-1.172c-.37-.655-.835-1.008-1.442-1.008h-6.766c-.607 0-1.073.353-1.442 1.008a4.228 4.228 0 00-.44 1.172C46.152 58.971 48.003 60 50 60c1.997 0 3.848-1.029 5.265-2.736zM73.875 48H76a1 1 0 010 2h-2.126a4.002 4.002 0 01-7.748 0H64a1 1 0 010-2h2.126a4.001 4.001 0 017.748 0zm-40 0H36a1 1 0 010 2h-2.126a4.002 4.002 0 01-7.748 0H24a1 1 0 010-2h2.126a4.001 4.001 0 017.748 0zM82 59.115V40.569c-5.4-.915-9.598-5.205-10.445-10.569h-43.11C27.598 35.364 23.4 39.654 18 40.57v18.562c5.458.97 9.665 5.395 10.39 10.868h43.12c.728-5.507 4.982-9.952 10.49-10.885zm0 2.034A10.76 10.76 0 0073.53 70h6.636C81.191 70 82 69.222 82 68.29V61.15zm-64 .02v7.122c0 .931.808 1.709 1.834 1.709h6.534A10.76 10.76 0 0018 61.17zM73.585 30A10.758 10.758 0 0082 38.535V31.71c0-.93-.809-1.709-1.834-1.709h-6.58zm-47.17 0h-6.581C18.808 30 18 30.778 18 31.71v6.825A10.758 10.758 0 0026.415 30zm53.751 43H19.834C17.176 73 15 70.905 15 68.29V31.71c0-2.615 2.176-4.71 4.834-4.71h60.332C82.823 27 85 29.095 85 31.71v36.58c0 2.615-2.177 4.71-4.834 4.71zM40 49c0-7.127 4.404-13 10-13s10 5.873 10 13-4.404 13-10 13-10-5.873-10-13zm-8 0a2 2 0 10-4 0 2 2 0 004 0zm40 0a2 2 0 10-4 0 2 2 0 004 0zm-21.925-7.637v1.5-1.5zM66.764 33a.5.5 0 110-1h2.48a.5.5 0 110 1h-2.48zM40 67a1.5 1.5 0 010-3h20a1.5 1.5 0 010 3H40zm9.764-34a.5.5 0 110-1h14a.5.5 0 110 1h-14zm-.485 14.385a.65.65 0 01-.64.661.65.65 0 01-.638-.66.65.65 0 01.639-.663.65.65 0 01.639.662zm2.741 0a.65.65 0 01-.64.661.65.65 0 01-.639-.66c0-.367.287-.663.64-.663a.65.65 0 01.64.662z"
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
const LgCash = withWrapper(Vector);
LgCash.groupName = "Payment";
export default LgCash;
