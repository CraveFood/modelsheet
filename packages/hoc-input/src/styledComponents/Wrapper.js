import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { colors, fontSizes } from "@crave/farmblocks-theme";

const outlineColor = transparentize(0.92, colors.INDIGO_MILK_CAP);

const getColorByStatus = ({ fallbackColor }) => ({
  focused,
  active,
  invalid,
}) => {
  if (focused || active) return colors.INDIGO_MILK_CAP;
  if (invalid) return colors.STRAWBERRY;
  return fallbackColor;
};

const ifSmall = (smallValue, defaultValue) => props =>
  props.fontSize === fontSizes.SMALL ? smallValue : defaultValue;

const customCursor = props => (props.disabled ? "default" : "pointer");

const fontStyles = css`
  font-family: Lato-regular, sans-serif;
  font-size: ${fontSizes.MEDIUM}px;
`;

const focusedStyle = ({ focused, active, borderRadius }) =>
  (focused || active) &&
  css`
    box-shadow: 0 0 0px ${borderRadius} ${outlineColor};
    border-width: 2px;
    margin: -1px; // balances the border-width increase
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > .input {
    order: 2;
    box-sizing: border-box;
    border: solid 1px;
    border-radius: ${({ borderRadius }) => borderRadius};
    border-color: ${getColorByStatus({ fallbackColor: colors.GREY_16 })};
    background-color: ${props => (props.disabled ? colors.GREY_16 : "#ffffff")};

    ${focusedStyle};

    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: text;
    overflow: auto; /* clip children background to border radius */

    .wrapped {
      flex: 1;
    }

    > input,
    .select__search & input {
      padding: 8px 16px;
    }

    > textarea {
      padding: 16px;
    }

    > input,
    > textarea,
    .select__search & input {
      min-width: 0;
      border: 0;
      flex: 1;
      outline: none;
      ${fontStyles};
      color: ${props => (props.disabled ? colors.GREY_32 : colors.CARBON)};
      background: none;
      &::placeholder {
        color: ${colors.GREY_32};
      }
      &[type="search"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        &::-webkit-search-cancel-button {
          display: none;
        }
        &::-ms-clear {
          width: 0;
          height: 0;
        }
        padding-left: 8px;
      }
      &[role="combobox"] {
        cursor: ${customCursor};
      }
    }

    > .icon {
      color: ${getColorByStatus({ fallbackColor: colors.GREY_16 })};

      &.left {
        margin-left: 8px;
        margin-right: -8px; // adjust default input margin from 16px to 8px
      }

      &.right {
        margin-right: 8px;
        margin-left: -8px; // adjust default input margin from 16px to 8px
      }
    }

    > .clear {
      color: ${colors.GREY_16};
      font-size: 20px;
      height: 24px;
      &:hover {
        text-decoration: none;
        color: ${colors.INDIGO_MILK_CAP};
      }
      a {
        text-decoration: none;
        cursor: pointer;
      }
      margin-right: ${ifSmall("8", "16")}px;
    }
  }

  .input.dropdown {
    cursor: ${customCursor};
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .prefix {
    margin-left: 16px;
    margin-right: -8px; // adjust default input margin from 16px to 8px
  }

  .suffix {
    margin-right: 16px;
    margin-left: -8px; // adjust default input margin from 16px to 8px
  }

  .prefix,
  .suffix {
    ${fontStyles};
    color: ${getColorByStatus({ fallbackColor: colors.GREY_32 })};
  }

  .label {
    margin-bottom: 8px;
  }
`;
export default Wrapper;
