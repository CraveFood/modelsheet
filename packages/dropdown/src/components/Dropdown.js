import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import {
  Button as AriaButtonWrapper,
  Wrapper as AriaWrapper,
  Menu,
} from "react-aria-menubutton";
import Button, { buttonSizes } from "@crave/farmblocks-button";
import { SmChevronDown } from "@crave/farmblocks-icon";

import DropdownWrapper from "../styledComponents/DropdownWrapper";
import DropdownMenuWrapper from "../styledComponents/DropdownMenuWrapper";

const Dropdown = props => (
  <DropdownWrapper className={props.className}>
    <AriaWrapper onSelection={props.handleSelection}>
      <AriaButtonWrapper>
        <Button
          rightIcon={<SmChevronDown />}
          text={props.text}
          size={props.size}
          ref={props.innerRef}
          {...props.buttonProps}
          className="menuButton"
        />
      </AriaButtonWrapper>

      <Menu>
        <DropdownMenuWrapper
          align={props.align}
          zIndex={props.zIndex}
          width={props.width}
          maxHeight={props.maxHeight}
        >
          <ul>{props.children}</ul>
        </DropdownMenuWrapper>
      </Menu>
    </AriaWrapper>
  </DropdownWrapper>
);

Dropdown.defaultProps = {
  handleSelection: () => false,
  text: "",
  align: "left",
  size: buttonSizes.MEDIUM,
};

Dropdown.propTypes = {
  handleSelection: PropTypes.func,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
  zIndex: PropTypes.number,
  size: PropTypes.oneOf(values(buttonSizes)),
  width: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  maxHeight: PropTypes.string,
  className: PropTypes.string,
  buttonProps: PropTypes.object,
};

export default Dropdown;
