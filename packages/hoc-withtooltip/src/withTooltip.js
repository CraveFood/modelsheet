import * as React from "react";
import Tooltip, { alignments } from "@crave/farmblocks-tooltip";
import wrapDisplayName from "recompose/wrapDisplayName";
import PropTypes from "prop-types";
import styled from "styled-components";
import values from "object.values";
import { CSSTransition } from "react-transition-group";

const Container = styled.div`
  position: relative;
  display: ${props => (props.displayBlock ? "block" : "inline-block")};

  .hitArea {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    opacity: 1;
    transition: opacity 100ms ease-in;
  }

  .appear-exit {
    opacity: 1;
  }

  .appear-exit-active {
    opacity: 0;
    transition: opacity 100ms ease-in;
  }
`;

const withTooltip = WrappedComponent => {
  return class extends React.Component {
    state = {
      tooltipVisible: false
    };

    onMouseOver = event => {
      this.setState({ tooltipVisible: true });
      return this.props.onMouseOver && this.props.onMouseOver(event);
    };

    onMouseLeave = event => {
      this.setState({ tooltipVisible: false });
      return this.props.onMouseLeave && this.props.onMouseLeave(event);
    };

    render() {
      const {
        disableTooltip,
        tooltipContent,
        tooltipAlign,
        zIndex,
        bondariesSelector,
        hideArrow,
        padding,
        top,
        overflow,
        displayBlock,
        ...wrappedComponentProps
      } = this.props;

      const mouseEvents = {
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave
      };

      return (
        <Container displayBlock={displayBlock}>
          {!disableTooltip && <div className="hitArea" {...mouseEvents} />}
          <WrappedComponent {...wrappedComponentProps} />
          <CSSTransition
            in={this.state.tooltipVisible && !disableTooltip}
            mountOnEnter
            unmountOnExit
            timeout={100}
            classNames="appear"
          >
            <Tooltip
              align={tooltipAlign}
              zIndex={zIndex}
              bondariesSelector={bondariesSelector}
              hideArrow={hideArrow}
              padding={padding}
              top={top}
              overflow={overflow}
            >
              {tooltipContent}
            </Tooltip>
          </CSSTransition>
        </Container>
      );
    }

    static displayName = wrapDisplayName(WrappedComponent, "withTooltip");

    static propTypes = {
      disableTooltip: PropTypes.bool,
      tooltipContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      align: PropTypes.oneOf(values(alignments)),
      zIndex: PropTypes.number,
      bondariesSelector: PropTypes.string,
      hideArrow: PropTypes.bool,
      padding: PropTypes.string,
      top: PropTypes.string,
      overflow: PropTypes.string,
      onMouseLeave: PropTypes.func,
      onMouseOver: PropTypes.func,
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps
    };
  };
};

export default withTooltip;
