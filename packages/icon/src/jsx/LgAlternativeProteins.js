import React from "react";
import PropTypes from "prop-types";

const LgAlternativeProteins = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      ref={ref}
      ariaHidden={!props.ariaLabel}
      {...props}
    >
      <path
        d="M80.374 60.005a6.532 6.532 0 1 1-5.795 10.392 6.533 6.533 0 0 1-11.192-1.168c-4.245 1.166-8.763 1.77-13.392 1.77C28.818 71 11.5 58.318 11.5 42.41c0-1.652.183-3.27.545-4.83.26-1.166.622-2.319 1.081-3.447a1.5 1.5 0 0 1 .558-.683C18.596 30.174 33.19 28 49.995 28c16.805 0 31.41 2.176 36.32 5.45a1.5 1.5 0 0 1 .562.695 23.977 23.977 0 0 1 1.075 3.423 21.37 21.37 0 0 1 .548 4.842c0 6.529-2.943 12.667-8.126 17.596zm-6.82 1.53C81.119 56.685 85.5 49.774 85.5 42.408a18.37 18.37 0 0 0-.664-4.926c-.108.36-.299.702-.564 1.022-2.932 3.55-17.251 5.974-34.308 5.974-17.053 0-31.379-2.424-34.296-5.973a2.972 2.972 0 0 1-.535-.93c-.059.222-.113.445-.163.67a18.37 18.37 0 0 0-.47 4.163C14.5 56.423 30.309 68 49.995 68c4.438 0 8.76-.588 12.807-1.721a6.532 6.532 0 0 1 10.753-4.744zm-50.343-21.64a4.267 4.267 0 0 1 4.965-2.645 4.475 4.475 0 0 1 8.001-1.47 5.762 5.762 0 0 1 4.85-2.647 5.763 5.763 0 0 1 4.896 2.72 5.826 5.826 0 0 1 1.694.05 4.595 4.595 0 0 1 8.434-1.725 5.2 5.2 0 0 1 7.882 1.271 4.46 4.46 0 0 1 1.726-.346c1.063 0 2.039.37 2.806.99a5.959 5.959 0 0 1 3.447-1.09c2.851 0 5.237 1.987 5.78 4.632 2.562-.723 4.326-1.541 5.04-2.406.15-.182.207-.321.207-.443 0-.245-.27-.616-.922-1.06-3.986-2.68-17.073-4.644-32.053-4.644-14.977 0-28.055 1.964-32.037 4.64-.657.447-.927.818-.927 1.064 0 .122.057.261.21.447.796.968 2.915 1.879 6.001 2.661zm1.983.457c2.044.43 4.399.81 6.993 1.125a5.774 5.774 0 0 1 2.818-2.937 1.005 1.005 0 0 1-.019-.192 2.473 2.473 0 0 0-4.942-.124c.259.232.491.498.69.792a1 1 0 1 1-1.656 1.12 2.266 2.266 0 0 0-3.884.216zm34.38 1.849c6.4-.378 12.03-1.116 16.176-2.072-.318-1.771-1.912-3.125-3.838-3.125-.805 0-1.568.236-2.207.663.273.579.427 1.226.427 1.91a1 1 0 0 1-2 0 2.472 2.472 0 1 0-4.947 0 1 1 0 0 1-2 0c0-1.132.42-2.165 1.114-2.953a3.2 3.2 0 0 0-6.04 1.48c0 .077-.008.151-.024.223a5.67 5.67 0 0 1 3.34 3.874zm-2.055.107a3.668 3.668 0 0 0-6.946.17 165.5 165.5 0 0 0 6.946-.17zm-9.004.165a5.64 5.64 0 0 1 1.373-2.726 3.767 3.767 0 0 0-7.057 1.822c.101.248.185.504.251.769 1.768.073 3.583.119 5.433.135zm2.973-3.95a5.645 5.645 0 0 1 2.776-.62c.025-.66.173-1.288.422-1.863a2.595 2.595 0 0 0-5.124.594 5.777 5.777 0 0 1 1.926 1.89zm-14.113-.544l.115-.001a5.75 5.75 0 0 1 3.773 1.407 5.788 5.788 0 0 1 2.648-2.909 3.768 3.768 0 0 0-6.536 1.503zm-3.06 3.737c2.09.215 4.31.39 6.626.518a3.77 3.77 0 0 0-6.626-.518zM25.128 55.92a1 1 0 0 1 1.343-1.482c5.696 5.164 14.57 8.325 23.979 8.325a1 1 0 0 1 0 2c-9.89 0-19.244-3.333-25.322-8.843zm-5.942-8.91a1 1 0 1 1 1.912-.586c.464 1.515 1.197 2.995 2.18 4.414a1 1 0 1 1-1.643 1.14c-1.098-1.584-1.923-3.25-2.45-4.967zm53.673 19.502a3.532 3.532 0 1 0-7.063.002 3.532 3.532 0 0 0 7.063-.002zm10.502 0a3.53 3.53 0 1 0-7.061 0 3.53 3.53 0 0 0 7.061 0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
LgAlternativeProteins.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgAlternativeProteins.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgAlternativeProteins.groupName = "Categories";
export default LgAlternativeProteins;