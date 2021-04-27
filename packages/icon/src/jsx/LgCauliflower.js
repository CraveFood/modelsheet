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
      d="M54.613 53.396a11.612 11.612 0 01-4.395-2.736 11.618 11.618 0 01-4.394 2.736c.46.949.788 2.136 1.035 3.528.197 1.113.322 2.293.392 3.472.042.712.056 1.275.055 1.615v.001c-.001 1.387-1.723 2.03-2.632.982-.755-.87-2.164-1.862-4.011-2.872a44.757 44.757 0 00-3.523-1.715c-.308-.135-.6-.259-.872-.37a8.62 8.62 0 01-4.025 1.244 8.643 8.643 0 01-.475 2.401c.289.037.589.082.898.138a15.942 15.942 0 015.52 2.08c4.52 2.762 7.567 7.746 8.493 15.303a1.5 1.5 0 01-2.977.365c-.818-6.672-3.365-10.838-7.08-13.109a12.964 12.964 0 00-4.487-1.687 12.569 12.569 0 00-2.071-.207c-.108.12-.22.239-.335.354-3.09 3.09-7.945 3.353-11.34.77a8.64 8.64 0 01-8.855-2.081 8.647 8.647 0 010-12.23 8.644 8.644 0 011.922-1.452 8.645 8.645 0 011.763-9.67 8.647 8.647 0 019.67-1.763 8.663 8.663 0 011.395-1.867 11.6 11.6 0 01-.548-3.535c0-6.427 5.21-11.636 11.637-11.636 1.3 0 2.573.214 3.774.626C40.66 17.355 45.078 14 50.22 14c5.14 0 9.559 3.356 11.07 8.081a11.619 11.619 0 013.775-.626c6.426 0 11.636 5.21 11.636 11.636 0 1.225-.192 2.414-.55 3.534a8.654 8.654 0 011.397 1.868 8.644 8.644 0 019.67 1.764 8.644 8.644 0 011.763 9.669 8.636 8.636 0 011.923 1.451 8.647 8.647 0 010 12.23 8.64 8.64 0 01-8.856 2.082 8.646 8.646 0 01-11.675-1.124c-.58.006-1.284.065-2.072.207-1.545.278-3.068.821-4.486 1.688-3.715 2.27-6.262 6.436-7.08 13.108a1.5 1.5 0 11-2.978-.365c.926-7.556 3.974-12.54 8.494-15.303a15.941 15.941 0 015.519-2.08c.31-.056.61-.101.9-.138a8.643 8.643 0 01-.476-2.402 8.625 8.625 0 01-4.025-1.244c-.271.112-.563.236-.871.37a44.757 44.757 0 00-3.523 1.716c-1.848 1.01-3.257 2.003-4.011 2.872-.91 1.047-2.631.405-2.633-.982 0-.341.014-.904.056-1.616.069-1.179.194-2.359.391-3.472.247-1.392.576-2.58 1.036-3.528zm3.168.615c-.448.43-.937 1.67-1.25 3.436-.07.395-.13.804-.18 1.22a30.168 30.168 0 011.983-1.178 46.849 46.849 0 013.399-1.671 8.593 8.593 0 01-1.114-2.004 11.68 11.68 0 01-2.838.197zm7.41 1.09a1.5 1.5 0 01.134.103 5.646 5.646 0 004.212 1.022 1.5 1.5 0 011.71 1.711 5.638 5.638 0 001 4.18c.039.045.074.093.107.143a5.646 5.646 0 008.37.62 1.5 1.5 0 011.673-.277 5.643 5.643 0 006.384-9.105 5.616 5.616 0 00-2.382-1.42 1.5 1.5 0 01-.774-2.337 5.643 5.643 0 00-.53-7.363 5.643 5.643 0 00-7.364-.53 1.5 1.5 0 01-2.336-.776 5.581 5.581 0 00-.686-1.479 11.652 11.652 0 01-4.756 4.047 11.64 11.64 0 01-6.483 9.221 5.627 5.627 0 001.72 2.24zm-22.536-1.09a11.716 11.716 0 01-2.838-.197 8.58 8.58 0 01-1.114 2.004 46.85 46.85 0 013.4 1.671c.716.392 1.379.785 1.983 1.178a23.145 23.145 0 00-.181-1.22c-.313-1.766-.801-3.007-1.25-3.436zm-7.416 1.096a5.646 5.646 0 00.603-8.358 1.5 1.5 0 112.167-2.075 8.627 8.627 0 012.4 6.199 8.69 8.69 0 001.636.154 8.61 8.61 0 006.964-3.546 1.5 1.5 0 012.42.001 8.606 8.606 0 006.963 3.545c4.696 0 8.524-3.757 8.625-8.448a1.5 1.5 0 01.988-1.378 8.628 8.628 0 005.695-8.11 8.636 8.636 0 00-8.636-8.636c-1.459 0-2.86.36-4.11 1.04a1.5 1.5 0 01-2.2-1.104A8.63 8.63 0 0050.218 17a8.63 8.63 0 00-8.536 7.39 1.5 1.5 0 01-2.2 1.104 8.581 8.581 0 00-4.11-1.04 8.636 8.636 0 00-8.469 10.344 8.651 8.651 0 018.346.688 1.5 1.5 0 01-1.665 2.495 5.651 5.651 0 00-8.543 3.091 1.5 1.5 0 01-2.336.776 5.646 5.646 0 00-7.366.529 5.644 5.644 0 00-.529 7.365 1.5 1.5 0 01-.774 2.335 5.614 5.614 0 00-2.382 1.422 5.644 5.644 0 006.385 9.104 1.5 1.5 0 011.672.276 5.644 5.644 0 008.367-.616c.034-.052.071-.102.112-.149a5.638 5.638 0 00.997-4.177 1.5 1.5 0 011.71-1.711 5.643 5.643 0 004.219-1.027 1.5 1.5 0 01.122-.092zm8.697 28.459a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0v-2zm14.477-41.169a1.084 1.084 0 11-2.167.001 1.084 1.084 0 012.167 0zm4.337 2.169a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0zm-4.337 2.168a1.084 1.084 0 11-2.167.001 1.084 1.084 0 012.167 0z"
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
const LgCauliflower = withWrapper(Vector);
LgCauliflower.groupName = "Subcategories";
export default LgCauliflower;
