import React from "react";
import { render } from "react-testing-library";
import { renderHook, act as hookAct } from "react-hooks-testing-library";

import { useModal, ModalManager } from "./helpers";

describe("Modal helpers", () => {
  describe("useModal", () => {
    let result, props, actions;
    beforeEach(() => {
      ({ result } = renderHook(() => useModal()));
      [props, actions] = result.current;
    });

    it("should give a set of props for a modal component", () => {
      expect(props).toHaveProperty("isOpen", false);
      expect(props).toHaveProperty("onRequestClose");
      expect(props.onRequestClose).toBeInstanceOf(Function);
    });

    it("should give a set of actions for a modal component", () => {
      expect(actions).toHaveProperty("open");
      expect(actions.open).toBeInstanceOf(Function);
      expect(actions).toHaveProperty("close");
      expect(actions.close).toBeInstanceOf(Function);
      expect(actions).toHaveProperty("toggle");
      expect(actions.toggle).toBeInstanceOf(Function);
    });

    describe("actions", () => {
      describe("open", () => {
        it("should change isOpen to true", () => {
          expect(props.isOpen).toBe(false);
          hookAct(() => {
            actions.open();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(true);

          hookAct(() => {
            actions.open();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(true);
        });
      });

      describe("close", () => {
        it("should change isOpen to false", () => {
          hookAct(() => {
            actions.open();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(true);

          hookAct(() => {
            actions.close();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(false);

          hookAct(() => {
            actions.close();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(false);
        });
      });

      describe("toggle", () => {
        it("should alternate isOpen between false and true", () => {
          expect(props.isOpen).toBe(false);
          hookAct(() => {
            actions.toggle();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(true);

          hookAct(() => {
            actions.toggle();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(false);
        });
      });
    });

    describe("props", () => {
      describe("onRequestClose", () => {
        it("should change isOpen to false", () => {
          hookAct(() => {
            actions.open();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(true);

          hookAct(() => {
            props.onRequestClose();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(false);

          hookAct(() => {
            props.onRequestClose();
          });
          [props, actions] = result.current;
          expect(props.isOpen).toBe(false);
        });
      });
    });
  });

  describe("ModalManager", () => {
    it("should pass to children the results of useModal", () => {
      const childrenSpy = jest.fn();
      render(<ModalManager>{childrenSpy}</ModalManager>);
      const result = childrenSpy.mock.calls[0];

      expect(result).toEqual([
        {
          isOpen: false,
          onRequestClose: expect.any(Function),
        },
        {
          open: expect.any(Function),
          close: expect.any(Function),
          toggle: expect.any(Function),
        },
      ]);
    });
  });
});