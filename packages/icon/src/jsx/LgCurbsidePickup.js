import React from "react";
import PropTypes from "prop-types";

const LgCurbsidePickup = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M79.275 48.263V67.01h9.5a1.5 1.5 0 0 1 0 3h-22.5v6.5a1.5 1.5 0 0 1-1.5 1.5h-50a1.5 1.5 0 0 1 0-3h6.5v-4.26a4.51 4.51 0 0 1-3-4.25V52.008c-3.497-.072-5.741-1.534-6.736-3.92-.5-1.201-.61-2.424-.508-3.512.013-.135.027-.24.039-.312a1.5 1.5 0 0 1 1.48-1.253h5.725v-2.69c0-7.904 6.406-14.31 14.31-14.31h13.379c7.904 0 14.31 6.407 14.31 14.31v3.19H66a1.5 1.5 0 0 1 1.48 1.253c.012.071.026.177.038.312.102 1.088-.008 2.31-.508 3.512-.994 2.386-3.238 3.847-6.735 3.92V66.5c0 1.96-1.252 3.63-3 4.25v4.259h6v-6.5a1.5 1.5 0 0 1 1.5-1.5h11.5V48.248a23.828 23.828 0 0 1-.89-.911 28.901 28.901 0 0 1-2.805-3.542c-2.57-3.824-4.123-8.048-4.123-12.559 0-5.383 4-9.237 9.235-9.237h.18c5.236 0 9.235 3.854 9.235 9.237 0 4.511-1.552 8.735-4.122 12.559a28.901 28.901 0 0 1-2.805 3.542c-.35.376-.656.686-.905.926zm-19 1.243c2.288-.056 3.444-.82 3.966-2.073.124-.298.207-.612.255-.923h-4.221v2.996zm-42-.5V46.01h-4.222c.049.311.132.625.256.923.522 1.253 1.678 2.017 3.966 2.073zm32 22.004h-1v4h5v-4h-2.5v1.5a.75.75 0 1 1-1.5 0v-1.5zm-4 4v-4h-14v4h14zm-21-4h-1v4h5v-4h-2.5v1.5a.75.75 0 1 1-1.5 0v-1.5zm30.49-3a1.51 1.51 0 0 0 1.51-1.51V40.32c0-6.247-5.064-11.31-11.311-11.31h-13.38c-6.246 0-11.31 5.063-11.31 11.31V66.5c0 .834.676 1.51 1.51 1.51h32.982zm-1.99-20v-6.47a9.031 9.031 0 0 0-9.031-9.03H33.806a9.031 9.031 0 0 0-9.031 9.03v6.47h29zm-31 1v-7.47c0-6.092 4.938-11.03 11.03-11.03h10.939c6.092 0 11.03 4.938 11.03 11.03v7.47a1 1 0 0 1-1 1h-31a1 1 0 0 1-1-1zm17-13.75a.75.75 0 1 1 0-1.5h4.969a.75.75 0 1 1 0 1.5h-4.97zm-11.113 2.68a.75.75 0 0 1-1.228-.861 7.777 7.777 0 0 1 6.372-3.32h2.97a.75.75 0 1 1 0 1.5h-2.97a6.277 6.277 0 0 0-5.144 2.682zm24.613 26.57a1 1 0 0 0 0-2h-28a1 1 0 0 0 0 2h28zm0 2h-28a3 3 0 0 1 0-6h28a3 3 0 0 1 0 6zm-25.5-12.25h-3.25v2.5h6.413a3.252 3.252 0 0 0-3.163-2.5zm4 4h-8a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75h4a4.75 4.75 0 0 1 4.75 4.75.75.75 0 0 1-.75.75zm15 0a.75.75 0 0 1-.75-.75 4.75 4.75 0 0 1 4.75-4.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-8zm.837-1.5h6.413v-2.5h-3.25a3.252 3.252 0 0 0-3.163 2.5zm30.37-11.466a25.92 25.92 0 0 0 2.513-3.173c2.264-3.366 3.612-7.038 3.612-10.885 0-3.7-2.632-6.237-6.235-6.237h-.18c-3.603 0-6.235 2.536-6.235 6.237 0 3.847 1.35 7.519 3.613 10.885a25.92 25.92 0 0 0 2.712 3.386l.2-.213zm1.793-13.833a2.082 2.082 0 1 0-4.165 0 2.082 2.082 0 0 0 4.165 0zm2 0a4.082 4.082 0 1 1-8.165 0 4.082 4.082 0 0 1 8.165 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgCurbsidePickup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgCurbsidePickup.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgCurbsidePickup.groupName = "Delivery";
export default LgCurbsidePickup;