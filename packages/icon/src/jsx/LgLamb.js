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
      d="M34.429 24.512A8.68 8.68 0 0142.916 14a8.682 8.682 0 018.682 8.681 1.5 1.5 0 01-3 0 5.682 5.682 0 10-9.195 4.466 1.5 1.5 0 11-1.856 2.356 8.724 8.724 0 01-1.399-1.383 5.645 5.645 0 00-2.658-.657 5.682 5.682 0 00-4.038 9.676c1.93.026 3.605.336 5.154 1.04a1.5 1.5 0 11-1.24 2.731c-1.316-.597-2.84-.822-4.746-.763-5.026.15-9.205 1.614-17.54 5.6 1.517 1.547 3.64 2.569 6.659 3.423 2.662.755 4.801 1.13 6.837 1.125 2.252-.003 4.32-.503 6.09-1.524a101.506 101.506 0 01-.112-1.873 36.04 36.04 0 01-.02-.466 1.5 1.5 0 112.999-.098 76.666 76.666 0 00.087 1.656c.084 1.333.207 2.821.374 4.425.476 4.576 1.213 9.151 2.263 13.408 2.9 11.761 7.548 18.658 14.003 18.658s11.103-6.897 14.003-18.658c1.05-4.257 1.787-8.832 2.263-13.408.167-1.604.29-3.092.374-4.426a76.666 76.666 0 00.087-1.655 1.5 1.5 0 112.998.098 79.647 79.647 0 01-.15 2.61c1.654.839 3.546 1.25 5.59 1.253 2.035.005 4.176-.37 6.838-1.125 3.019-.854 5.14-1.876 6.658-3.423-8.337-3.986-12.514-5.45-17.54-5.6-1.905-.059-3.43.166-4.746.763a1.5 1.5 0 11-1.24-2.731c1.601-.727 3.338-1.035 5.349-1.041a5.682 5.682 0 00-6.658-9.038 1.5 1.5 0 11-1.386-2.661 8.682 8.682 0 0111.591 11.927c4.536.58 8.929 2.311 16.465 5.934l1.16.558a1.5 1.5 0 01.606 2.175c-2.022 3.083-4.987 4.763-9.442 6.024-2.906.824-5.303 1.243-7.66 1.238-2.073-.003-4.049-.357-5.857-1.085l-.053.515c-.49 4.704-1.248 9.41-2.334 13.816-3.203 12.987-8.563 20.94-16.916 20.94-8.354 0-13.714-7.953-16.916-20.94-1.086-4.405-1.844-9.112-2.334-13.816-.026-.245-.05-.488-.074-.727-1.942.871-4.09 1.294-6.354 1.297-2.359.005-4.754-.414-7.66-1.238-4.456-1.261-7.421-2.94-9.443-6.024a1.5 1.5 0 01.605-2.175l1.16-.558c7.636-3.67 12.046-5.4 16.647-5.957a8.682 8.682 0 018.538-12.83zm17.972 49.922l2.292 2.423a1 1 0 01-1.453 1.375l-2.817-2.979-2.817 2.979a1 1 0 11-1.453-1.375l2.183-2.308c-.962-.47-1.683-1.307-2.175-2.395a7.581 7.581 0 01-.657-2.58 1 1 0 111.996-.12c.006.098.03.3.08.569.087.45.22.898.404 1.308.478 1.058 1.182 1.632 2.255 1.64h.043c1.072-.008 1.775-.582 2.253-1.64.185-.41.317-.858.403-1.308.051-.268.075-.47.08-.57a1 1 0 111.997.12 7.583 7.583 0 01-.657 2.58c-.454 1.005-1.103 1.796-1.957 2.281zM45.3 55.564a2.5 2.5 0 11-4.999 0 2.5 2.5 0 015 0zm15 0a2.5 2.5 0 11-4.999 0 2.5 2.5 0 015 0zM39.596 38.031a1 1 0 11-1.99-.194 1 1 0 011.99.194zm3.786 2.38a1 1 0 11-1.99-.194 1 1 0 011.99.194zm-4.175 1.601a1 1 0 11-1.99-.194 1 1 0 011.99.194zm12.391-19.33a1.5 1.5 0 01-3 0 8.682 8.682 0 1114.023 6.844 1.5 1.5 0 01-1.847-2.364 5.682 5.682 0 10-9.176-4.48z"
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
const LgLamb = withWrapper(Vector);
LgLamb.groupName = "Subcategories";
export default LgLamb;
