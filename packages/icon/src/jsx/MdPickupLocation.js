import React from "react";
import PropTypes from "prop-types";

const MdPickupLocation = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M29.5 19.25a3.25 3.25 0 0 1 3.24 3h1.414a.75.75 0 0 1 .747.68l.758 8.07h.18a1 1 0 0 1 0 2h-18.5c-.367.446-.738.872-1.109 1.276-.378.413-.73.774-1.048 1.083-.194.188-.336.32-.418.391a1 1 0 0 1-.661.25h-.206a1 1 0 0 1-.661-.25 12.922 12.922 0 0 1-.418-.391 26.22 26.22 0 0 1-1.048-1.083c-.371-.404-.742-.83-1.11-1.276H5a1 1 0 0 1 0-2h4.136c-.176-.25-.35-.503-.52-.762C5.733 25.896 4 21.11 4 16.02 4 10.167 8.266 6 13.897 6h.206C19.733 6 24 10.167 24 16.02c0 5.09-1.734 9.876-4.615 14.218-.172.259-.345.513-.52.762h4.476l.758-8.07a.75.75 0 0 1 .747-.68h1.413a3.25 3.25 0 0 1 3.241-3zm1.732 3a1.75 1.75 0 0 0-3.464 0h3.464zm-4.982 1.5h-.721L24.847 31h9.306l-.682-7.25h-.721V24a.75.75 0 1 1-1.5 0v-.25h-3.5V24a.75.75 0 1 1-1.5 0v-.25zm-11.494 9.174c1.01-1.1 2.02-2.37 2.962-3.791C20.398 25.093 22 20.673 22 16.02 22 11.283 18.639 8 14.103 8h-.206C9.361 8 6 11.282 6 16.02c0 4.653 1.602 9.073 4.282 13.113a30.898 30.898 0 0 0 2.962 3.791c.268.293.522.557.756.791.234-.234.488-.498.756-.79zM17 17a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm2 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdPickupLocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdPickupLocation.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPickupLocation.groupName = "Delivery";
export default MdPickupLocation;