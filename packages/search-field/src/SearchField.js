import * as React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import debounce from "lodash.debounce";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";
import {
  DropdownMenuWrapper,
  DropdownItemWrapper
} from "@crave/farmblocks-dropdown";
import { Item } from "@crave/farmblocks-input-select";

import ScrollBox from "./components/ScrollBox";
import DropdownWrapper from "./styledComponents/DropdownWrapper";

const EnhancedInput = compose(disabledTooltip, withMessages, formInput)(
  "input"
);
EnhancedInput.displayName = "EnhancedInput";

class SearchField extends React.Component {
  state = {
    highlightedIndex: -1,
    focused: false,
    inputValue: this.props.displayValue || this.props.value
  };

  debouncedOnChange = debounce(this.props.onChange, this.props.debounceDelay);
  onChange = event => {
    // retain synthetic events for async use.
    // https://reactjs.org/docs/events.html#event-pooling
    event && event.persist && event.persist();

    this.setState({ inputValue: event.target.value, highlightedIndex: -1 });
    this.debouncedOnChange(event);
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.debounceDelay !== this.props.debounceDelay ||
      prevProps.onChange !== this.props.onChange
    ) {
      this.debouncedOnChange && this.debouncedOnChange.cancel();
      this.debouncedOnChange = debounce(
        this.props.onChange,
        this.props.debounceDelay
      );
    }
  };

  componentWillUnmount = () => {
    this.debouncedOnChange.cancel();
  };

  changeHighlight = modifier => {
    this.setState(prevState => {
      const highlightedIndex = Math.max(
        Math.min(
          prevState.highlightedIndex + modifier,
          this.props.items.length - 1
        ),
        -1
      );
      this.scroller && this.scroller.centerChildByIndex(highlightedIndex);
      return {
        highlightedIndex
      };
    });
  };

  onKeyDown = event => {
    const { key } = event;
    switch (key) {
      case "Enter":
        if (this.state.highlightedIndex < 0) {
          this.debouncedOnChange.flush();
        } else {
          this.onSelect(this.state.highlightedIndex);
        }
        break;
      case "Escape":
        this.setState({ highlightedIndex: -1 });
        break;
      case "ArrowUp":
        event.preventDefault();
        this.changeHighlight(-1);
        break;
      case "ArrowDown":
        event.preventDefault();
        this.changeHighlight(1);
        break;
    }
  };

  onSelect = index => {
    const selectedItem = this.props.items && this.props.items[index];
    if (selectedItem) {
      this.setState({ inputValue: selectedItem.label });
      this.props.onSelect(selectedItem.value);
    }
    this.input && this.input.blur();
  };

  onFocus = () => this.setState({ focused: true, highlightedIndex: -1 });
  onBlur = () => this.setState({ focused: false, highlightedIndex: -1 });
  preventBlur = event => {
    event.preventDefault();
  };

  onItemClick = ({ currentTarget }) => {
    const selectedIndex =
      this.scroller &&
      this.scroller.wrapper && // ref inside a ref 😜
      Array.from(this.scroller.wrapper.childNodes).indexOf(currentTarget);

    this.onSelect(selectedIndex);
  };

  _renderItem = (item, highlighted) => (
    <DropdownItemWrapper
      key={item.value}
      highlighted={highlighted}
      onClick={this.onItemClick}
    >
      {item.render ? (
        item.render(highlighted, item)
      ) : (
        <Item label={item.label} image={item.image} />
      )}
    </DropdownItemWrapper>
  );

  render() {
    const {
      width,
      onChange,
      debounceDelay,
      maxMenuHeight,
      items,
      onScrollReachEnd,
      onSelect,
      loading,
      ...inputProps
    } = this.props;
    return (
      <DropdownWrapper style={{ width }}>
        <EnhancedInput
          value={
            this.state.highlightedIndex === -1
              ? this.state.inputValue
              : items[this.state.highlightedIndex].label
          }
          onChange={this.onChange}
          type="search"
          clearIcon={this.state.focused ? undefined : "wg-edit"} // use default clearIcon when editing
          displayBlock
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          innerRef={node => (this.input = node)}
          {...inputProps}
        />
        {!this.props.disabled &&
          this.state.focused &&
          (items || loading) && (
            <DropdownMenuWrapper onMouseDown={this.preventBlur}>
              <ScrollBox
                maxHeight={maxMenuHeight}
                onReachEnd={onScrollReachEnd}
                ref={node => (this.scroller = node)}
              >
                {items &&
                  items.map((item, index) => {
                    return this._renderItem(
                      item,
                      index === this.state.highlightedIndex
                    );
                  })}
                {loading}
              </ScrollBox>
            </DropdownMenuWrapper>
          )}
      </DropdownWrapper>
    );
  }

  static defaultProps = {
    onChange: () => false,
    onSelect: () => false,
    width: 200,
    maxMenuHeight: 353,
    debounceDelay: 500
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          label: PropTypes.string,
          image: PropTypes.string
        }),
        PropTypes.node
      ])
    ),
    loading: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxMenuHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    debounceDelay: PropTypes.number,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    displayValue: PropTypes.string,
    ...formInputProps,
    ...withMessagesProps,
    ...disabledTooltipProps
  };
}

export default SearchField;