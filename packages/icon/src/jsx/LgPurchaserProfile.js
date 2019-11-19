import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M37.822 46.5h25v-4.922-8.935a1.5 1.5 0 013 0v6.9c3.889-1.54 6.409-5.192 6.409-9.513 0-5.714-4.298-10.146-9.824-10.146a1.5 1.5 0 01-.45-.068 1.5 1.5 0 01-1.327-1.053C59.376 14.722 55.593 12 51.144 12c-5.476 0-9.915 4.44-9.915 9.916 0 .85.106 1.684.315 2.491a1.5 1.5 0 01-2.904.751 13.017 13.017 0 01-.262-5.21c-5.153.579-9.35 4.966-9.35 10.16 0 4.754 3.264 8.94 7.47 9.986a1.5 1.5 0 01-.724 2.911c-5.545-1.379-9.746-6.767-9.746-12.897 0-7.166 6.046-13.066 13.216-13.22C41.205 12.251 45.794 9 51.144 9c5.393 0 10.085 3.135 12.006 7.905 6.843.383 12.08 6.03 12.08 13.125 0 5.966-3.774 10.993-9.408 12.685v16.661c0 8.01-5.932 11.767-15.5 11.767-9.565 0-15.5-3.758-15.5-11.767V45.643a1.5 1.5 0 013 0v.857zm0 2v10.876c0 5.991 4.385 8.767 12.5 8.767 8.118 0 12.5-2.775 12.5-8.767V48.5h-25zm8.967 28h-5.396v2.715a1.5 1.5 0 01-.446 1.067l-.484.478a1.5 1.5 0 01-1.054.433H25.745l1.03 6.773a1.5 1.5 0 01-2.967.45l-1.291-8.498A1.5 1.5 0 0124 78.193h14.393V75a1.5 1.5 0 011.5-1.5H60.562a1.5 1.5 0 011.5 1.5v3.193H76a1.5 1.5 0 011.482 1.734l-1.34 8.498a1.5 1.5 0 01-2.964-.468l1.067-6.764h-13.18a1.5 1.5 0 01-1.035-.413l-.502-.478a1.5 1.5 0 01-.466-1.087V76.5H48.789v7a1 1 0 01-2 0v-7zm-1.523-46.598a1.5 1.5 0 01-1.78 2.414 12.955 12.955 0 01-2.57-2.515 1.5 1.5 0 112.375-1.832 9.955 9.955 0 001.975 1.933zM46.789 87.5a1 1 0 012 0v2a1 1 0 01-2 0v-2zm.992-33.109a2.391 2.391 0 11-4.782 0 2.391 2.391 0 014.782 0zm10 0a2.391 2.391 0 11-4.782 0 2.391 2.391 0 014.782 0z"
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
const LgPurchaserProfile = withWrapper(Vector);
LgPurchaserProfile.groupName = "Menu";
export default LgPurchaserProfile;
