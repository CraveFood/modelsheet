import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12.4 3.647c.356-.854 1.275-1.262 2.189-1.01l.152.049 1.9.792c.783.369 1.162 1.26.948 2.078l-.047.152-.18.547.128.124.147.15.545-.18.06-.024c.78-.284 1.65.035 2.102.735l.08.135.066.136.742 1.806c.197.452.213.945.05 1.325a1.692 1.692 0 01-.778.958l-.13.064-.511.27.004.05.003.174-.001.175-.002.024.456.235c.33.137.605.365.795.638l.087.14.073.147c.198.401.214.86.08 1.28l-.057.156-.722 1.74c-.155.484-.511.853-1.043 1.081-.382.133-.783.153-1.12.053l-.14-.05-.549-.181-.123.129-.124.122-.027.024.184.552.022.054c.284.78-.035 1.648-.735 2.101l-.136.08-.136.066-1.804.74c-.867.38-1.868.014-2.282-.747l-.064-.13-.271-.511-.048.004-.175.003-.174-.001-.027-.002-.233.457c-.15.358-.39.654-.713.845l-.144.075-.153.062a1.966 1.966 0 01-.698.104l-.178-.014-.09-.013-.1-.018-.128-.033-.132-.047-1.766-.726c-.481-.155-.85-.512-1.078-1.043a1.863 1.863 0 01-.05-1.13l.053-.145.185-.539-.24-.238-.027-.028-.519.172c-.32.126-.67.161-.98.106l-.15-.036-.298-.11a1.721 1.721 0 01-.828-.777l-.075-.156-.744-1.806c-.376-.867-.01-1.866.75-2.28l.13-.064.509-.27-.005-.224.001-.2-.455-.234a1.74 1.74 0 01-.845-.713l-.076-.144-.062-.154a1.864 1.864 0 01-.037-1.163l.058-.162.74-1.802c.324-.882 1.278-1.32 2.147-1.088l.144.045.546.178.275-.276-.171-.518a1.83 1.83 0 01-.106-.98l.035-.15.05-.142a1.71 1.71 0 01.837-.984l.156-.076 1.805-.742c.868-.378 1.869-.01 2.282.749l.063.13.27.509.225-.006.188.002.225-.456zm-4.366 7.838a4 4 0 117.933 1.03 4 4 0 01-7.933-1.03z"
      fill={color}
      fillRule="evenodd"
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
const SmSettingsFilled = withWrapper(Vector);
SmSettingsFilled.groupName = "Actions";
export default SmSettingsFilled;