import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";
import Link from "@crave/farmblocks-link";

import {
  Wrapper,
  Overlay,
  ConstrainedCard,
  ContentWrapper,
  Header,
} from "./Modal.styled";

const Modal = ({
  isOpen,
  parentNode,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  onRequestClose,
  showCloseButton,
  children,
}) => {
  const handleKeyDown = event => {
    if (shouldCloseOnEsc && event.key === "Escape") {
      onRequestClose?.(event);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line no-param-reassign
      parentNode.style.overflow = "hidden";
      parentNode.addEventListener("keydown", handleKeyDown);
      return;
    }

    // eslint-disable-next-line no-param-reassign
    parentNode.style.overflow = "";
    parentNode.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const fade = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const slide = useTransition(isOpen, null, {
    from: { transform: "translate3D(0, 50px, 0)", maxHeight: "100%" },
    enter: { transform: "translate3D(0, 0px, 0)" },
    leave: { transform: "translate3D(0, -100px, 0)" },
    unique: true,
  });

  return ReactDOM.createPortal(
    fade.map(
      ({ item: fadeItem, key: fadeKey, props: fadeStyle }) =>
        fadeItem && (
          <Wrapper key={fadeKey} style={fadeStyle}>
            <Overlay
              className="overlay"
              onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
            />
            {slide.map(
              ({ item: slideItem, key: slideKey, props: slideStyle }) =>
                slideItem && (
                  <animated.div key={slideKey} style={slideStyle}>
                    <ConstrainedCard floating className="card">
                      {showCloseButton && (
                        <Header className="header">
                          <Link
                            className="close"
                            rightIcon="wg-close-int"
                            onClick={onRequestClose}
                          />
                        </Header>
                      )}
                      <ContentWrapper className="content">
                        {children}
                      </ContentWrapper>
                    </ConstrainedCard>
                  </animated.div>
                ),
            )}
          </Wrapper>
        ),
    ),
    parentNode,
  );
};
Modal.defaultProps = {
  isOpen: false,
  parentNode: document.body,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  showCloseButton: true,
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  parentNode: PropTypes.instanceOf(HTMLElement),
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
