import * as React from "react";
import PropTypes from "prop-types";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";

const Tooltip = props => (
  <Container>
    <StyledTooltip {...props}>{props.text}</StyledTooltip>
  </Container>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right"]),
  zIndex: PropTypes.number
};

Tooltip.defaultProps = {
  isVisible: true,
  align: "left",
  zIndex: 1000
};

export default Tooltip;
